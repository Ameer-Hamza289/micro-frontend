# 🛒 MicroMart - Micro Frontend E-commerce Platform

A modern e-commerce platform built with **micro frontend architecture** using React, Next.js, and Tailwind CSS v4.1.

## 🚀 Features

- **Micro Frontend Architecture** - Independent, scalable services
- **Tailwind CSS v4.1** - Latest CSS framework with modern features
- **Next.js 15** - React framework with App Router
- **TypeScript** - Full type safety across all services
- **Zustand** - Lightweight state management
- **Module Federation** - Runtime micro frontend composition

## 🏗️ Architecture

```
micromart-platform/
├── shell-app/          # Main orchestrator (Port 3000)
├── product-catalog/    # Product browsing (Port 3001)
├── cart-service/       # Shopping cart (Port 3002)
├── user-dashboard/     # User management (Port 3003)
└── shared/            # Shared components & utilities
```

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4.1** - Styling with latest features

### State Management
- **Zustand** - Lightweight state management
- **React Context** - Component-level state

### Micro Frontend
- **Module Federation** - Runtime composition
- **Webpack 5** - Bundling and federation

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd micromart-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   npm run setup:all
   ```

3. **Start all services**
   ```bash
   npm run dev
   ```

4. **Or start services individually**
   ```bash
   # Shell App (Main)
   npm run dev:shell     # http://localhost:3000

   # Product Catalog
   npm run dev:products  # http://localhost:3001

   # Cart Service  
   npm run dev:cart      # http://localhost:3002

   # User Dashboard
   npm run dev:dashboard # http://localhost:3003
   ```

## 🌟 What's New in Tailwind CSS v4.1

This project showcases the latest Tailwind CSS v4.1 features:

- **Text Shadows** - `text-shadow-md`, `text-shadow-lg`
- **Masking Utilities** - `mask-t-from-50%`, `mask-radial-*`
- **OKLCH Colors** - Modern color space for vivid colors
- **CSS Variables** - All theme values as CSS custom properties
- **Modern CSS Features** - Cascade layers, `@property`, `color-mix()`

## 📱 Services Overview

### Shell App (Port 3000)
- Main navigation and routing
- Global state management  
- Shared header/footer
- Authentication wrapper

### Product Catalog (Port 3001)
- Product browsing and search
- Category filtering
- Product details
- Inventory management

### Cart Service (Port 3002)
- Shopping cart management
- Checkout process
- Order summary
- Payment integration

### User Dashboard (Port 3003)
- User profile management
- Order history
- Wishlist functionality
- Account settings

## 🎯 Key Features Demonstrated

### Modern CSS (Tailwind v4.1)
- Text shadows on hero sections
- Gradient masks and overlays
- OKLCH color system
- CSS custom properties
- Responsive design patterns

### Micro Frontend Patterns
- Independent deployments
- Shared component library
- Cross-service communication
- State synchronization

### UX/UI Excellence
- Smooth animations and transitions
- Touch-friendly interactions
- Accessibility best practices
- Mobile-first responsive design

## 🔧 Development

### Project Structure
```
src/
├── app/                # Next.js App Router
│   ├── globals.css    # Tailwind configuration
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/         # React components
├── store/             # Zustand stores
└── types/             # TypeScript definitions
```

### Custom Tailwind Configuration
```css
@theme {
  /* Brand Colors (OKLCH) */
  --color-brand-500: oklch(0.65 0.15 220);
  
  /* Custom Animations */
  --ease-brand: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Custom Utilities */
  --spacing-18: 4.5rem;
}
```

### Available Scripts
```bash
npm run dev           # Start all services
npm run build         # Build all services  
npm run setup:all     # Install all dependencies
npm run lint          # Lint all code
```

## 🚢 Deployment

Each micro frontend can be deployed independently:

```bash
# Build individual services
npm run build:shell
npm run build:products  
npm run build:cart
npm run build:dashboard
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Tailwind CSS Team** - For the amazing v4.1 features
- **Next.js Team** - For the excellent React framework
- **Micro Frontend Community** - For architecture inspiration

---

**Built with ❤️ using Micro Frontends and Tailwind CSS v4.1** 