# Professional Portfolio 2025

A modern, responsive portfolio website built with React, TypeScript, and Three.js, featuring smooth animations, dark/light theme support, and an immersive 3D warp drive background.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations using Framer Motion
- **3D Background**: Interactive Three.js warp drive effect in the hero section
- **Dark/Light Theme**: Persistent theme switching with Zustand state management
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Scrolling**: Intersection Observer-based navigation with smooth scroll behavior
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript for better developer experience
- **Vite** - Fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### State Management
- **Zustand** - Lightweight state management with persistence

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header with theme toggle
│   ├── ProjectCard.tsx  # Project showcase cards
│   └── three/
│       └── WarpDrive.tsx # 3D warp drive background component
├── sections/            # Main page sections
│   ├── Hero.tsx         # Landing section with 3D background
│   ├── About.tsx        # Skills and experience section
│   ├── Projects.tsx     # Portfolio projects showcase
│   └── Contact.tsx      # Contact information and form
├── stores/              # State management
│   └── useThemeStore.ts # Theme state with persistence
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd professional-portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### Personal Information
Update the following files to customize the portfolio with your information:

- `src/sections/Hero.tsx` - Update name, title, and description
- `src/sections/About.tsx` - Modify skills and experience
- `src/sections/Projects.tsx` - Add your projects
- `src/sections/Contact.tsx` - Update contact information

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Component styles are in their respective `.tsx` files
- Global styles are in `src/index.css`

### 3D Background
The warp drive effect can be customized in `src/components/three/WarpDrive.tsx`

## 🌟 Key Components

### Theme Management
The application uses Zustand with persistence middleware to maintain theme preference across sessions.

### Navigation
Smooth scrolling navigation with active section highlighting using Intersection Observer API.

### Loading Animation
A progress bar at the top that animates on initial load and disappears when complete.

### Responsive Design
Mobile-first approach with Tailwind CSS breakpoints for optimal viewing on all devices.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Three.js community for 3D graphics resources
- React and TypeScript communities for excellent documentation

---

Built with ❤️ using React, TypeScript, and Three.js