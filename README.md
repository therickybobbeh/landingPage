# Portfolio Website with Azure Static Web Apps and Azure Functions

This project is a portfolio website built with Next.js for the frontend and Azure Functions for the backend API. It showcases professional experience, skills, and projects while featuring an AI-powered chat assistant.

## Architecture

- **Frontend**: Next.js deployed on Azure Static Web Apps
- **API**: Azure Functions for serverless backend
- **Integration**: Seamless API routing through Azure Static Web Apps proxy

## Features

- Responsive design using Bootstrap
- AI-powered chat assistant using OpenAI's API
- Resume viewing capabilities
- Project showcase
- Professional experience timeline

## Local Development

### Prerequisites

- Node.js 18+ (for Next.js and Azure Functions)
- Azure Functions Core Tools (`npm install -g azure-functions-core-tools@4`)
- Azure CLI (optional, for deployment)

### Setup

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd testing
   ```

2. Install dependencies for the frontend
   ```bash
   cd frontend
   npm install
   ```

3. Install dependencies for the API
   ```bash
   cd ../api
   npm install
   ```

4. Set up environment variables

   Create a `.env.local` file in the `frontend` directory:
   ```
   NEXT_PUBLIC_AZURE_STATIC_WEB_APPS=false
   NEXT_PUBLIC_FUNCTION_API_URL=http://localhost:7071/api/chat
   ```

   Add your OpenAI API key to `api/local.settings.json`:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "AzureWebJobsStorage": "",
       "FUNCTIONS_WORKER_RUNTIME": "node",
       "OPENAI_API_KEY": "your-openai-api-key-here",
       "CORS_ALLOWED_ORIGINS": "http://localhost:3000,https://*.azurestaticapps.net"
     },
     "Host": {
       "LocalHttpPort": 7071,
       "CORS": "*",
       "CORSCredentials": false
     }
   }
   ```

### Running Locally

1. Start the Azure Functions API
   ```bash
   cd api
   func start
   ```

2. In another terminal, start the Next.js frontend
   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser to http://localhost:3000

## Deployment

The project is configured to deploy automatically via GitHub Actions when changes are pushed to the main branch:

1. The frontend is deployed to Azure Static Web Apps
2. The API is deployed as a function app within Azure Static Web Apps
3. Environment variables are managed in the Azure Portal

### Manual Deployment

To deploy manually:

1. Deploy the frontend
   ```bash
   cd frontend
   npm run build
   npx swa deploy ./out --env production
   ```

2. Deploy the API
   ```bash
   cd api
   func azure functionapp publish <your-function-app-name>
   ```

## Project Structure

- `/frontend`: Next.js frontend application
  - `/app`: Next.js app directory (components, pages, and API routes)
  - `/public`: Static assets
  - `/scripts`: Utility scripts

- `/api`: Azure Functions backend
  - `/chat`: Chat function that integrates with OpenAI API

## Adding New Features

### Frontend

Add new components following the Atomic Design methodology:
- Atoms: Basic UI elements
- Molecules: Combinations of atoms
- Organisms: Complex components
- Templates: Page layouts
- Pages: Full screens

### API

Add new Azure Functions:
1. Create a new directory in `/api`
2. Add `function.json` to define bindings
3. Add `index.js` for the function logic
4. Update local settings if needed

## Troubleshooting

### CORS Issues
If experiencing CORS issues:
- Ensure the function has the correct CORS settings in `host.json`
- Check that the frontend is using the correct API URL

### API Connection Issues
If the frontend can't connect to the API:
- Check that the environment variables are set correctly
- Verify the API is running and accessible
- Check network requests in browser developer tools

### Deployment Issues
If deployment fails:
- Check the GitHub Actions logs
- Verify that the Azure Static Web Apps API token is set correctly
- Ensure the OPENAI_API_KEY is set in the Azure Portal for the function app

## License

[Your chosen license]