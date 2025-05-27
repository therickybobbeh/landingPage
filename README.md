# Portfolio Landing Page

A modern, responsive portfolio landing page built with Next.js, following atomic design principles and styled with Bootstrap.

## Project Overview

This project is a portfolio landing page that showcases development work, projects, and skills. It's built as a static site using Next.js and follows atomic design principles for component organization.

## Tech Stack

- **Frontend**: Next.js with TypeScript
- **Styling**: Bootstrap
- **Containerization**: Docker
- **CI/CD**: GitHub Actions deploying to Azure Container Registry

## Project Structure

```
project-root/
├── frontend/             # Next.js frontend with atomic design structure
│   ├── app/              # Next.js app directory
│   │   ├── components/   # Components organized according to atomic design
│   │   │   ├── atoms/    # Basic building blocks
│   │   │   ├── molecules/# Simple component groups
│   │   │   ├── organisms/# Complex UI components
│   │   │   └── templates/# Page layouts
│   │   └── styles/       # Global styles and Bootstrap customizations
│   └── public/           # Static assets
├── docker-compose.yml    # Local development container configuration
└── .github/workflows/    # CI/CD pipeline configuration
```

## Atomic Design Implementation

This project follows atomic design principles to create a modular, maintainable UI:

1. **Atoms**: Basic building blocks (Button, Typography, Avatar, Icon)
2. **Molecules**: Groups of atoms that work together (FormGroup, UserInfo, AnimatedCard)
3. **Organisms**: Complex components composed of molecules and atoms (Banner, Header, Footer)
4. **Templates**: Page-level layouts that arrange organisms
5. **Pages**: Complete screens using templates and filling them with content

## Development

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ (for local development without Docker)

### Running Locally

With Docker:
```bash
docker-compose up
```

Without Docker:
```bash
cd frontend
npm install
npm run dev
```

## Deployment

The application is automatically deployed via GitHub Actions when changes are pushed to the main branch. The workflow:

1. Builds the Docker image
2. Pushes it to Azure Container Registry
3. Updates the deployment in Azure

## Bootstrap Migration

This project uses Bootstrap for styling. All components are built using Bootstrap's utility classes and components rather than custom CSS where possible.

## Project Features

- Responsive design for all device sizes
- Portfolio projects showcase
- Skills and experience sections
- Contact form
- PDF resume viewer
- Atomic design component architecture