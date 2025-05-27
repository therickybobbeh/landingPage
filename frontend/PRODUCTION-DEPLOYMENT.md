# Production Deployment with HTTPS

This guide covers how to run the portfolio landing page in production mode with HTTPS support.

## Local Production Testing

### Option 1: Using Docker Compose

To run the production version locally using Docker Compose:

```bash
# Run the production profile
docker-compose --profile prod up
```

This will build and start the container in production mode but without HTTPS.

### Option 2: Local HTTPS Development

To test with HTTPS locally (useful for testing HTTPS-specific features):

1. **Generate SSL certificates** (first time only):

   ```bash
   # Install mkcert
   # macOS:
   brew install mkcert
   # Windows:
   choco install mkcert
   # Linux:
   apt install mkcert

   # Create directory for certificates 
   mkdir -p frontend/certs
   
   # Install local CA
   mkcert -install
   
   # Generate certificates
   mkcert -key-file frontend/certs/localhost-key.pem -cert-file frontend/certs/localhost.pem localhost 127.0.0.1
   ```

2. **Run with HTTPS**:

   ```bash
   cd frontend
   npm run dev:https
   ```

   This will start the development server with HTTPS support at https://localhost:3000

### Option 3: Build and Run in Production Mode

```bash
cd frontend
npm run production
```

## Azure Deployment

The application is configured to automatically deploy to Azure Container Apps when changes are pushed to the main branch. The deployment:

1. Builds the Docker image with production settings
2. Pushes it to Azure Container Registry
3. Deploys to Azure Container Apps with HTTPS enabled

### Custom Domain Setup

To use a custom domain with HTTPS:

1. Add the `CUSTOM_DOMAIN` secret to your GitHub repository settings with your domain name (e.g., `portfolio.example.com`)
2. After the first deployment with this secret, the workflow will output CNAME records to add to your DNS provider
3. Once DNS is configured, Azure will automatically provision and renew SSL certificates

### Required GitHub Secrets

The following secrets need to be set in your GitHub repository:

- `AZURE_CREDENTIALS`: Service Principal credentials for Azure
- `ACR_USERNAME`: Azure Container Registry username
- `ACR_PASSWORD`: Azure Container Registry password
- `CUSTOM_DOMAIN`: (Optional) Custom domain name

## Environment Configuration

The application uses different environment files:

- `.env.development`: Used for local development
- `.env.production`: Used for production deployments

These files contain environment-specific settings that control how the application behaves in each environment.