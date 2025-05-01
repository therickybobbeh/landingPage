# My Portfolio - Modern Web Application

[![Next.js](https://img.shields.io/badge/Next.js-13.0+-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3+-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Docker](https://img.shields.io/badge/Docker-20.10+-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

## 🚀 Overview

A modern, high-performance portfolio application built with Next.js, TypeScript, and Bootstrap. This project showcases my technical expertise in full-stack development following industry best practices, modern design patterns, and scalable architecture.

### ✨ Live Demo

[View Live Portfolio](https://your-portfolio-url.com)

![Portfolio Preview](/public/preview.jpeg)

## 🛠️ Technical Stack

- **Frontend**: Next.js 13+ with App Router and TypeScript
- **UI Framework**: Bootstrap 5 with custom theming
- **Component Architecture**: Atomic Design methodology
- **State Management**: React Context API and Hooks
- **Styling**: Custom CSS with Bootstrap integration
- **Animations**: CSS transitions and React-based animations
- **Containerization**: Docker with multi-stage builds
- **API Integration**: Custom API client with TypeScript types
- **Responsive Design**: Mobile-first approach
- **Deployment**: Container-based cloud deployment
- **Architecture**: Atomic Design Pattern

## 🏗️ Architecture

This project implements the Atomic Design methodology to create a scalable, maintainable component library:

![Atomic Design](https://atomicdesign.bradfrost.com/images/content/atomic-design-process.png)

### Component Hierarchy

```
frontend/
├── atoms/          # Foundational components (Button, Input, Typography)
├── molecules/      # Groups of atoms (FormGroup, Card, UserInfo)
├── organisms/      # Complex UI sections (Header, Banner, ContactForm)
├── templates/      # Page layouts (MainLayout, AdminLayout)
└── pages/          # Full pages using templates and components
```

## 🌟 Key Features

- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Performance Optimized**: Efficient component rendering and asset optimization
- **Accessibility**: Semantic HTML and ARIA attributes for screen reader compatibility
- **SEO Ready**: OpenGraph metadata and structured data for better social sharing
- **Interactive UI Components**: Animated cards, transitions, and hover effects
- **Project Showcase**: Portfolio section featuring highlighted work with GitHub integration
- **Professional Experience**: Timeline-based experience section with company details
- **Skills Visualization**: Visual representation of technical and soft skills
- **Contact Form**: Form with validation and backend API integration
- **Resume Integration**: Embedded PDF viewer with download options
- **Admin Dashboard**: Protected routes for managing content and messages

## 💡 Project Highlights

- **Atomic Design Implementation**: Systematically organized components for maximum reusability
- **Custom Bootstrap Theming**: Personalized design system with consistent color schemes
- **Component Animations**: Subtle motion design for improved user experience
- **Unified Background System**: Dynamic, responsive background elements
- **Responsive Typography**: Fluid type scale across viewport sizes
- **Progressive Image Loading**: Optimized image loading for better performance
- **Custom Icon System**: Integrated icon library with consistent styling
- **Type-Safe API Integration**: Strongly typed API client for backend communication
- **Modular CSS Structure**: Well-organized styling with component-specific CSS
- **Document Head Management**: Dynamic metadata for improved SEO

## 📈 Performance Optimizations

- Server-side rendering for critical content
- Static generation for marketing pages
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Font optimization with next/font
- Memoization of expensive components

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Testing
npm run test
```

## 🐳 Docker Deployment

This project is containerized for consistent development and production environments:

```bash
# Build and run with Docker Compose
docker-compose up -d

# Production build
docker-compose -f docker-compose.prod.yml up -d
```

## 🚀 CI/CD Pipeline

Automated workflow with GitHub Actions:

1. **Build & Test**: Runs on every PR
2. **Code Quality**: SonarQube analysis
3. **Security Scan**: Dependency and container scanning
4. **Deployment**: Automatic to staging, manual to production

## 📚 Development Practices

- **TypeScript**: Strong typing throughout
- **Component Testing**: Jest and React Testing Library
- **Code Quality**: ESLint and Prettier
- **Git Flow**: Feature branches, PR reviews
- **Documentation**: JSDoc and Storybook components

## 📞 Contact

For inquiries about this project or employment opportunities:

- Email: [contact@yourportfolio.com](mailto:contact@yourportfolio.com)
- LinkedIn: [linkedin.com/in/this-is-robert](https://www.linkedin.com/in/this-is-robert/)
- GitHub: [github.com/therickybobbeh](https://github.com/therickybobbeh)

## 📄 License

MIT © Robert T. Cole