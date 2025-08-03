# 🌟 Sahaya Savari F - Portfolio Website

A modern, responsive portfolio website built with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Features advanced security systems, CAPTCHA integration, and comprehensive copyright protection.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![Build Status](https://img.shields.io/badge/Build-Passing-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)

## ✨ Features

### 🎨 **Modern Design**
- Responsive layout optimized for all devices
- Dark/Light theme support with smooth transitions
- Glass-morphism UI effects and particle backgrounds
- Smooth scroll animations and hover effects

### 🔒 **Advanced Security**
- **Entry Gate CAPTCHA**: Google reCAPTCHA v2 verification before site access
- **Admin Security System**: Secure bypass with attempt limiting and session management
- **Copyright Protection**: Comprehensive protection against content copying
- **Rate Limiting**: Multiple layers of security with automatic blocking

### 🚀 **Performance Optimized**
- **Lazy Loading**: Optimized image and component loading
- **Code Splitting**: Automatic code splitting with Vite
- **Tree Shaking**: Eliminates unused code from bundles
- **Image Optimization**: Compressed assets for faster loading

### 📱 **Interactive Components**
- **Contact Form**: reCAPTCHA-protected contact system
- **Resume Download**: Direct PDF download functionality
- **Social Links**: Direct links to GitHub, LinkedIn, and social profiles
- **Project Showcase**: Interactive project cards with GitHub integration

## 🛠️ Technology Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety and enhanced developer experience
- **Vite 5.4** - Ultra-fast build tool and dev server
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library

### **UI Components**
- **Radix UI** - Unstyled, accessible components
- **Lucide React** - Beautiful, customizable icons
- **React Hook Form** - Performant forms with easy validation

### **Security & Integrations**
- **Google reCAPTCHA v2** - Bot protection for forms
- **Custom Security System** - Multi-layer authentication
- **Environment Management** - Secure configuration handling

## 🏗️ Project Structure

```
MY-PORTFOLIO/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components (buttons, cards, etc.)
│   │   ├── EntryGate.tsx    # Security entry point
│   │   ├── AdminBypass.tsx  # Admin authentication
│   │   ├── Navbar.tsx       # Navigation component
│   │   └── ParticleBackground.tsx
│   ├── pages/
│   │   └── PortfolioHome.tsx # Main portfolio page
│   ├── utils/
│   │   ├── security.ts      # Security utilities
│   │   └── secureAdmin.ts   # Admin security system
│   ├── assets/              # Images, resume, and static files
│   ├── contexts/            # React contexts (theme, etc.)
│   └── hooks/               # Custom React hooks
├── public/                  # Public assets
├── .env.local              # Development environment
├── .env.production         # Production environment
└── docs/                   # Documentation files
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher
- **npm** or **yarn** package manager

### Installation
```bash
# Clone the repository
git clone https://github.com/Itzmesavari/Sahaya_Savari_F-portfolio.git
cd Sahaya_Savari_F-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run build:prod       # Optimized production build
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run clean            # Clean build cache
npm run deploy:firebase  # Deploy to Firebase
npm run deploy:netlify   # Deploy to Netlify
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for development:
```bash
VITE_RECAPTCHA_SITE_KEY=your_development_site_key
VITE_RECAPTCHA_SECRET_KEY=your_development_secret_key
```

Create `.env.production` for production:
```bash
VITE_RECAPTCHA_SITE_KEY=your_production_site_key
VITE_RECAPTCHA_SECRET_KEY=your_production_secret_key
```

### reCAPTCHA Setup
1. Visit [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin/)
2. Create a new site with reCAPTCHA v2
3. Add your domains (localhost for dev, production domain)
4. Copy site key and secret key to environment files

## 🌐 Deployment

### Automated Deployment
```bash
# Verify deployment readiness
node verify-deployment.js

# Build for production
npm run build:prod

# Deploy to your chosen platform
npm run deploy:firebase  # or deploy:netlify
```

### Supported Platforms
- **Firebase Hosting** ⭐ (Recommended)
- **Netlify**
- **Vercel** 
- **GitHub Pages**

📖 **Complete deployment guide available in [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)**

## 🔒 Security Features

### Entry Gate System
- CAPTCHA verification required for site access
- Blocks automated bots and unwanted traffic
- Session-based access management

### Admin Security
- Secure admin bypass for development
- Rate limiting with automatic blocking
- Session token validation
- Development-only visibility

### Copyright Protection
- Comprehensive content protection
- Right-click context menu disabling
- Copy/paste prevention
- Developer tools monitoring

📋 **Detailed security documentation in [SECURITY-DOCUMENTATION.md](./SECURITY-DOCUMENTATION.md)**

## 📊 Performance

### Build Stats
- **Bundle Size**: 459.23 kB (gzipped: 145.38 kB)
- **Build Time**: ~4-6 seconds
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)

### Optimization Features
- Automatic code splitting
- Image compression and lazy loading
- CSS purging and minification
- Tree-shaking for unused code elimination

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/pages/PortfolioHome.tsx` - Personal details, projects, skills
- `src/assets/` - Replace profile image and resume
- `public/` - Update favicon and meta tags

### Styling
- `src/index.css` - Global styles and theme variables
- `tailwind.config.ts` - Tailwind customization
- `src/components/ui/` - Component-specific styling

### Content
- **Profile**: Update name, bio, and image in PortfolioHome.tsx
- **Projects**: Modify the projects array with your work
- **Skills**: Update technical and soft skills lists
- **Contact**: Change contact information and social links

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
npm run clean && npm install && npm run build
```

**reCAPTCHA Not Working**
- Verify domain in reCAPTCHA console
- Check environment variables
- Ensure HTTPS in production

**Import Errors**
```bash
npm install --save-dev @types/react @types/react-dom
```

## 📞 Support

If you encounter any issues or have questions:

- 📧 **Email**: sahayasavari@gmail.com
- 🐙 **GitHub**: [@Itzmesavari](https://github.com/Itzmesavari)
- 💼 **LinkedIn**: [sahayasavari](https://www.linkedin.com/in/sahayasavari)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Radix UI** - For accessible component primitives
- **Vite** - For the blazingly fast build tool

---

**Made with ❤️ by Sahaya Savari F**

⭐ **Star this repository if you found it helpful!**
