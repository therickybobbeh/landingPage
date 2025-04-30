# Portfolio Landing Page - Atomic Design

This project is a landing page portfolio built with Next.js and follows the Atomic Design methodology with Bootstrap styling.

## Project Structure

```
frontend/
├── components/
│   ├── atoms/         # Basic building blocks
│   ├── molecules/     # Groups of atoms
│   ├── organisms/     # Complex UI components
│   └── templates/     # Page layouts
├── app/
│   ├── pages/         # Next.js pages using templates
│   └── styles/        # Global styles and Bootstrap customizations
└── public/            # Static assets
```

## Atomic Design Implementation

This project strictly follows Atomic Design principles:

### 1. Atoms
- Basic building blocks like Button, Avatar, Typography, Icon
- Located in `components/atoms/`
- Each atom should be single-responsibility and highly reusable

### 2. Molecules
- Simple groups of atoms that function together
- Located in `components/molecules/`
- Examples: FormGroup, AnimatedCard, UserInfo

### 3. Organisms
- Complex UI components composed of molecules and atoms
- Located in `components/organisms/`
- Examples: Banner, Header, Footer, ContactForm

### 4. Templates
- Page-level layout components
- Located in `components/templates/`
- Examples: MainLayout, ResumeLayout

### 5. Pages
- Actual Next.js pages that use templates and components
- Located in `app/` directory

## Styling Conventions

- Use Bootstrap components and utilities wherever possible
- Component-specific styles use `[component].module.css` only when necessary
- Theme variables are in `app/styles/theme.css`
- Additional utilities are in `app/styles/utilities.css`

## Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

## Building and Deployment

```bash
# Build the project
npm run build

# Start the production server
npm start
```

## Docker Support

The project includes Docker configuration for easy development and deployment:

```bash
# Run with Docker Compose
docker-compose up
```