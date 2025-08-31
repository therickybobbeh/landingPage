#!/bin/bash

# Security Fix Script for Portfolio Landing Page
# This script addresses the critical security vulnerabilities found in the security scan

set -e

echo "🛡️  Starting security vulnerability fixes..."
echo "=================================================="

# Navigate to frontend directory
cd frontend/

echo "📦 Current package.json versions:"
echo "Next.js: $(npm list next --depth=0 2>/dev/null | grep next@ || echo 'Not found')"
echo "React-PDF: $(npm list react-pdf --depth=0 2>/dev/null | grep react-pdf@ || echo 'Not found')"

echo ""
echo "🔧 Applying automatic security fixes..."

# Fix vulnerabilities that can be automatically resolved
npm audit fix

echo ""
echo "⚡ Checking for remaining vulnerabilities..."
npm audit --audit-level=moderate

echo ""
echo "🎯 Manual Updates Required:"
echo "1. Next.js needs to be updated to 14.2.32+ (currently 14.0.4)"
echo "2. react-pdf may need manual update due to breaking changes"

echo ""
echo "📝 Recommended manual commands:"
echo "   npm install next@latest"
echo "   npm install react-pdf@latest  # May require code changes"

echo ""
echo "✅ Security fixes completed!"
echo "❗ Please review the above recommendations and apply manual updates as needed."

cd ..