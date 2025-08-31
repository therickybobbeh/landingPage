#!/usr/bin/env python3
"""
Comprehensive Security Scanner for Portfolio Landing Page
Performs multiple security checks and generates a detailed report.
"""

import os
import sys
import json
import subprocess
import re
from pathlib import Path
from datetime import datetime

class SecurityScanner:
    def __init__(self, project_path):
        self.project_path = Path(project_path)
        self.results = {
            "scan_date": datetime.now().isoformat(),
            "project_path": str(project_path),
            "vulnerabilities": [],
            "warnings": [],
            "info": [],
            "security_score": 0
        }
        
    def run_command(self, command, cwd=None):
        """Run a command and return the result"""
        try:
            result = subprocess.run(
                command, 
                shell=True, 
                capture_output=True, 
                text=True, 
                cwd=cwd or self.project_path
            )
            return result.returncode, result.stdout, result.stderr
        except Exception as e:
            return -1, "", str(e)
    
    def scan_npm_vulnerabilities(self):
        """Scan for npm package vulnerabilities"""
        print("🔍 Scanning frontend dependencies for vulnerabilities...")
        
        frontend_path = self.project_path / "frontend"
        if frontend_path.exists():
            # Run npm audit
            code, stdout, stderr = self.run_command("npm audit --json", cwd=frontend_path)
            
            if code == 0 and stdout:
                try:
                    audit_data = json.loads(stdout)
                    vulnerabilities = audit_data.get("vulnerabilities", {})
                    
                    for package_name, vuln_data in vulnerabilities.items():
                        severity = vuln_data.get("severity", "unknown")
                        self.results["vulnerabilities"].append({
                            "type": "npm_vulnerability",
                            "package": package_name,
                            "severity": severity,
                            "description": f"Vulnerable npm package: {package_name}",
                            "location": "frontend/package.json"
                        })
                        
                except json.JSONDecodeError:
                    pass
            
            # Also check API dependencies
            api_path = self.project_path / "api"
            if api_path.exists():
                code, stdout, stderr = self.run_command("npm audit --json", cwd=api_path)
                if code == 0 and stdout:
                    try:
                        audit_data = json.loads(stdout)
                        vulnerabilities = audit_data.get("vulnerabilities", {})
                        
                        for package_name, vuln_data in vulnerabilities.items():
                            severity = vuln_data.get("severity", "unknown")
                            self.results["vulnerabilities"].append({
                                "type": "npm_vulnerability",
                                "package": package_name,
                                "severity": severity,
                                "description": f"Vulnerable npm package: {package_name}",
                                "location": "api/package.json"
                            })
                    except json.JSONDecodeError:
                        pass
    
    def scan_secrets(self):
        """Scan for potential secrets and credentials"""
        print("🔍 Scanning for potential secrets and credentials...")
        
        # Patterns for common secrets
        secret_patterns = [
            (r'(?i)api[_-]?key["\s]*[:=]["\s]*([a-zA-Z0-9]{20,})', "API Key"),
            (r'(?i)secret[_-]?key["\s]*[:=]["\s]*([a-zA-Z0-9]{20,})', "Secret Key"),
            (r'(?i)password["\s]*[:=]["\s]*([a-zA-Z0-9]{8,})', "Password"),
            (r'(?i)token["\s]*[:=]["\s]*([a-zA-Z0-9]{20,})', "Token"),
            (r'(?i)aws[_-]?access[_-]?key[_-]?id["\s]*[:=]["\s]*([A-Z0-9]{20})', "AWS Access Key"),
            (r'(?i)aws[_-]?secret[_-]?access[_-]?key["\s]*[:=]["\s]*([A-Za-z0-9/+=]{40})', "AWS Secret Key"),
            (r'(?i)github[_-]?token["\s]*[:=]["\s]*([a-zA-Z0-9]{40})', "GitHub Token"),
            (r'(?i)private[_-]?key["\s]*[:=]["\s]*([A-Za-z0-9/+=\-\n\r ]{100,})', "Private Key")
        ]
        
        # Files to scan (exclude node_modules and .git)
        scan_extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.env', '.yml', '.yaml', '.md']
        exclude_dirs = {'node_modules', '.git', '.next', 'dist', 'out'}
        
        for root, dirs, files in os.walk(self.project_path):
            # Remove excluded directories from dirs to prevent traversal
            dirs[:] = [d for d in dirs if d not in exclude_dirs]
            
            for file in files:
                if any(file.endswith(ext) for ext in scan_extensions):
                    file_path = Path(root) / file
                    try:
                        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                            content = f.read()
                            
                        for pattern, secret_type in secret_patterns:
                            matches = re.finditer(pattern, content, re.MULTILINE)
                            for match in matches:
                                # Skip if it's in a comment or example
                                line = content[content.rfind('\n', 0, match.start())+1:content.find('\n', match.end())]
                                if any(marker in line.lower() for marker in ['example', 'todo', 'fixme', 'xxx', 'placeholder']):
                                    continue
                                    
                                self.results["vulnerabilities"].append({
                                    "type": "potential_secret",
                                    "severity": "high",
                                    "description": f"Potential {secret_type} found",
                                    "location": str(file_path.relative_to(self.project_path)),
                                    "line_preview": line.strip()[:100]
                                })
                    except Exception:
                        continue
    
    def scan_security_headers(self):
        """Check for security headers and configurations"""
        print("🔍 Checking security headers and configurations...")
        
        # Check middleware.ts for security headers
        middleware_file = self.project_path / "frontend" / "middleware.ts"
        if middleware_file.exists():
            with open(middleware_file, 'r') as f:
                content = f.read()
                
            # Check for security headers
            security_headers = [
                "Strict-Transport-Security",
                "Content-Security-Policy", 
                "X-Frame-Options",
                "X-Content-Type-Options",
                "Referrer-Policy",
                "Permissions-Policy"
            ]
            
            missing_headers = []
            for header in security_headers:
                if header not in content:
                    missing_headers.append(header)
            
            if missing_headers:
                self.results["warnings"].append({
                    "type": "missing_security_headers",
                    "description": f"Missing security headers: {', '.join(missing_headers)}",
                    "location": "frontend/middleware.ts",
                    "recommendation": "Add comprehensive security headers to protect against various attacks"
                })
        
        # Check for HTTPS enforcement
        env_prod = self.project_path / "frontend" / ".env.production"
        if env_prod.exists():
            with open(env_prod, 'r') as f:
                content = f.read()
                if "NEXT_PUBLIC_HTTPS_ENABLED=true" in content:
                    self.results["info"].append({
                        "type": "security_config",
                        "description": "HTTPS enforcement is enabled in production",
                        "location": "frontend/.env.production"
                    })
                else:
                    self.results["warnings"].append({
                        "type": "https_not_enforced",
                        "description": "HTTPS enforcement may not be properly configured",
                        "location": "frontend/.env.production"
                    })
    
    def scan_input_validation(self):
        """Check input validation and sanitization"""
        print("🔍 Checking input validation and sanitization...")
        
        # Check chat API endpoints for input validation
        api_files = [
            self.project_path / "frontend" / "app" / "api" / "chat" / "route.ts",
            self.project_path / "api" / "chat" / "index.js"
        ]
        
        for api_file in api_files:
            if api_file.exists():
                with open(api_file, 'r') as f:
                    content = f.read()
                
                # Check for sanitization functions
                if "sanitizeUserInput" in content:
                    self.results["info"].append({
                        "type": "input_validation",
                        "description": "Input sanitization functions found",
                        "location": str(api_file.relative_to(self.project_path))
                    })
                
                # Check for prompt injection protection
                if "BLOCKED_PATTERNS" in content:
                    self.results["info"].append({
                        "type": "prompt_injection_protection",
                        "description": "Prompt injection protection patterns found",
                        "location": str(api_file.relative_to(self.project_path))
                    })
                
                # Check for length limits
                if "length" in content and ("1000" in content or "limit" in content.lower()):
                    self.results["info"].append({
                        "type": "input_length_validation",
                        "description": "Input length validation found",
                        "location": str(api_file.relative_to(self.project_path))
                    })
    
    def scan_docker_security(self):
        """Check Docker configurations for security issues"""
        print("🔍 Checking Docker security configurations...")
        
        dockerfile = self.project_path / "frontend" / "Dockerfile"
        if dockerfile.exists():
            with open(dockerfile, 'r') as f:
                content = f.read()
            
            # Check for security best practices
            if "USER " not in content:
                self.results["warnings"].append({
                    "type": "docker_security",
                    "description": "Dockerfile doesn't specify non-root user",
                    "location": "frontend/Dockerfile",
                    "recommendation": "Add USER directive to run container as non-root user"
                })
            
            if "COPY --chown=" not in content:
                self.results["warnings"].append({
                    "type": "docker_security", 
                    "description": "Files copied without explicit ownership",
                    "location": "frontend/Dockerfile",
                    "recommendation": "Use COPY --chown to set proper file ownership"
                })
        
        # Check docker-compose.yml
        compose_file = self.project_path / "docker-compose.yml"
        if compose_file.exists():
            with open(compose_file, 'r') as f:
                content = f.read()
            
            if "privileged:" in content:
                self.results["vulnerabilities"].append({
                    "type": "docker_security",
                    "severity": "high",
                    "description": "Container running in privileged mode",
                    "location": "docker-compose.yml"
                })
    
    def run_semgrep_scan(self):
        """Run Semgrep static analysis"""
        print("🔍 Running Semgrep static code analysis...")
        
        # Run semgrep with security rules
        code, stdout, stderr = self.run_command("semgrep --config=auto --json --quiet")
        
        if code == 0 and stdout:
            try:
                semgrep_data = json.loads(stdout)
                results = semgrep_data.get("results", [])
                
                for result in results:
                    severity = result.get("extra", {}).get("severity", "info")
                    message = result.get("extra", {}).get("message", "")
                    path = result.get("path", "")
                    
                    if severity in ["ERROR", "WARNING"]:
                        self.results["vulnerabilities"].append({
                            "type": "static_analysis",
                            "severity": severity.lower(),
                            "description": message,
                            "location": path,
                            "rule_id": result.get("check_id", "")
                        })
                    
            except json.JSONDecodeError:
                pass
    
    def calculate_security_score(self):
        """Calculate overall security score"""
        score = 100
        
        # Deduct points for vulnerabilities
        for vuln in self.results["vulnerabilities"]:
            severity = vuln.get("severity", "unknown")
            if severity == "critical":
                score -= 20
            elif severity == "high":
                score -= 15
            elif severity == "medium":
                score -= 10
            elif severity == "low":
                score -= 5
        
        # Deduct points for warnings
        score -= len(self.results["warnings"]) * 3
        
        # Bonus points for good security practices
        score += len(self.results["info"]) * 2
        
        self.results["security_score"] = max(0, min(100, score))
    
    def generate_report(self):
        """Generate and save the security report"""
        self.calculate_security_score()
        
        report_path = self.project_path / "security-report.json"
        with open(report_path, 'w') as f:
            json.dump(self.results, f, indent=2)
        
        # Generate human-readable report
        readable_report = self.generate_readable_report()
        readable_path = self.project_path / "security-report.md"
        with open(readable_path, 'w') as f:
            f.write(readable_report)
        
        print(f"\n📊 Security scan completed!")
        print(f"🔢 Security Score: {self.results['security_score']}/100")
        print(f"📄 Detailed report saved to: {report_path}")
        print(f"📋 Readable report saved to: {readable_path}")
        
        return self.results
    
    def generate_readable_report(self):
        """Generate human-readable markdown report"""
        report = f"""# Security Scan Report

**Scan Date:** {self.results['scan_date']}  
**Project:** {self.results['project_path']}  
**Security Score:** {self.results['security_score']}/100

## Summary

- **Vulnerabilities Found:** {len(self.results['vulnerabilities'])}
- **Warnings:** {len(self.results['warnings'])}
- **Security Features Detected:** {len(self.results['info'])}

"""
        
        if self.results['vulnerabilities']:
            report += "## 🚨 Vulnerabilities\n\n"
            for i, vuln in enumerate(self.results['vulnerabilities'], 1):
                report += f"### {i}. {vuln.get('description', 'Unknown vulnerability')}\n"
                report += f"**Type:** {vuln.get('type', 'unknown')}  \n"
                report += f"**Severity:** {vuln.get('severity', 'unknown')}  \n"
                report += f"**Location:** {vuln.get('location', 'unknown')}  \n"
                if vuln.get('recommendation'):
                    report += f"**Recommendation:** {vuln['recommendation']}  \n"
                report += "\n"
        
        if self.results['warnings']:
            report += "## ⚠️ Warnings\n\n"
            for i, warning in enumerate(self.results['warnings'], 1):
                report += f"### {i}. {warning.get('description', 'Unknown warning')}\n"
                report += f"**Type:** {warning.get('type', 'unknown')}  \n"
                report += f"**Location:** {warning.get('location', 'unknown')}  \n"
                if warning.get('recommendation'):
                    report += f"**Recommendation:** {warning['recommendation']}  \n"
                report += "\n"
        
        if self.results['info']:
            report += "## ✅ Security Features Detected\n\n"
            for i, info in enumerate(self.results['info'], 1):
                report += f"### {i}. {info.get('description', 'Unknown feature')}\n"
                report += f"**Type:** {info.get('type', 'unknown')}  \n"
                report += f"**Location:** {info.get('location', 'unknown')}  \n"
                report += "\n"
        
        report += """## Recommendations

### High Priority
1. Fix all critical and high severity vulnerabilities
2. Implement missing security headers
3. Ensure proper input validation on all endpoints

### Medium Priority
1. Address Docker security configurations
2. Review and update dependencies regularly
3. Implement comprehensive logging and monitoring

### Low Priority
1. Consider implementing Content Security Policy
2. Add rate limiting to API endpoints
3. Regular security audits and penetration testing

---
*This report was generated by the automated security scanner.*
"""
        
        return report
    
    def run_full_scan(self):
        """Run all security scans"""
        print("🛡️  Starting comprehensive security scan...")
        print("=" * 50)
        
        self.scan_npm_vulnerabilities()
        self.scan_secrets()
        self.scan_security_headers()
        self.scan_input_validation()
        self.scan_docker_security()
        self.run_semgrep_scan()
        
        return self.generate_report()

def main():
    if len(sys.argv) > 1:
        project_path = sys.argv[1]
    else:
        project_path = os.getcwd()
    
    scanner = SecurityScanner(project_path)
    results = scanner.run_full_scan()
    
    # Print summary
    print("\n" + "=" * 50)
    print("📋 SCAN SUMMARY")
    print("=" * 50)
    print(f"🔢 Security Score: {results['security_score']}/100")
    print(f"🚨 Vulnerabilities: {len(results['vulnerabilities'])}")
    print(f"⚠️  Warnings: {len(results['warnings'])}")
    print(f"✅ Security Features: {len(results['info'])}")

if __name__ == "__main__":
    main()