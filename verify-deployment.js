#!/usr/bin/env node

/**
 * Pre-deployment verification script
 * Checks all critical components before hosting
 */

import fs from 'fs';
import path from 'path';

console.log('🔍 Running Pre-Deployment Verification...\n');

// Check if required files exist
const requiredFiles = [
  'src/App.tsx',
  'src/main.tsx',
  'src/pages/PortfolioHome.tsx',
  'src/components/EntryGate.tsx',
  'src/components/AdminBypass.tsx',
  'src/utils/security.ts',
  'src/utils/secureAdmin.ts',
  'src/assets/SAHAYASAVARI F.jpg',
  'src/assets/SAHAYA SAVARI RESUME FINAL.pdf',
  '.env.local',
  '.env.production',
  'package.json',
  'vite.config.ts',
  'tailwind.config.ts'
];

let allFilesExist = true;

console.log('📁 Checking required files:');
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
    allFilesExist = false;
  }
});

// Check package.json for required dependencies
console.log('\n📦 Checking critical dependencies:');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const requiredDeps = [
  'react',
  'react-dom',
  'vite',
  'tailwindcss',
  'framer-motion',
  'lucide-react',
  '@radix-ui/react-toast',
  'react-google-recaptcha'
];

let allDepsPresent = true;
requiredDeps.forEach(dep => {
  if (packageJson.dependencies[dep] || packageJson.devDependencies[dep]) {
    console.log(`✅ ${dep}`);
  } else {
    console.log(`❌ ${dep} - MISSING`);
    allDepsPresent = false;
  }
});

// Check environment files
console.log('\n🔐 Checking environment configuration:');
try {
  const envLocal = fs.readFileSync('.env.local', 'utf8');
  const envProd = fs.readFileSync('.env.production', 'utf8');
  
  if (envLocal.includes('VITE_RECAPTCHA_SITE_KEY')) {
    console.log('✅ Development reCAPTCHA keys configured');
  } else {
    console.log('❌ Development reCAPTCHA keys missing');
  }
  
  if (envProd.includes('VITE_RECAPTCHA_SITE_KEY')) {
    console.log('✅ Production reCAPTCHA keys configured');
  } else {
    console.log('❌ Production reCAPTCHA keys missing');
  }
} catch (error) {
  console.log('❌ Environment files not readable');
}

// Check for potential issues in main files
console.log('\n🔧 Checking code quality:');
try {
  const portfolioHome = fs.readFileSync('src/pages/PortfolioHome.tsx', 'utf8');
  
  if (portfolioHome.includes('import ReCAPTCHA')) {
    console.log('✅ reCAPTCHA integration present');
  } else {
    console.log('❌ reCAPTCHA integration missing');
  }
  
  if (portfolioHome.includes('profileImage')) {
    console.log('✅ Profile image properly imported');
  } else {
    console.log('❌ Profile image import issue');
  }
  
  if (portfolioHome.includes('resumeFile')) {
    console.log('✅ Resume file properly imported');
  } else {
    console.log('❌ Resume file import issue');
  }
  
} catch (error) {
  console.log('❌ Cannot verify main component');
}

// Check build directory
console.log('\n🏗️ Checking build status:');
if (fs.existsSync('dist')) {
  const distFiles = fs.readdirSync('dist');
  if (distFiles.includes('index.html')) {
    console.log('✅ Build directory exists with HTML');
  } else {
    console.log('❌ Build incomplete - run npm run build');
  }
} else {
  console.log('⚠️ No build directory - run npm run build:prod');
}

// Final summary
console.log('\n📊 VERIFICATION SUMMARY:');
console.log('========================');

if (allFilesExist && allDepsPresent) {
  console.log('🎉 All checks passed! Ready for deployment.');
  console.log('\n🚀 Next steps:');
  console.log('1. Run: npm run build:prod');
  console.log('2. Choose hosting platform (Firebase/Netlify/Vercel)');
  console.log('3. Follow DEPLOYMENT-GUIDE.md instructions');
  console.log('4. Update reCAPTCHA domain settings');
} else {
  console.log('⚠️ Issues found! Please fix before deployment:');
  if (!allFilesExist) console.log('- Missing required files');
  if (!allDepsPresent) console.log('- Missing dependencies (run npm install)');
}

console.log('\n📚 Documentation available:');
console.log('- DEPLOYMENT-GUIDE.md - Complete hosting guide');
console.log('- SECURITY-DOCUMENTATION.md - Security system details');
console.log('- README.md - Project overview');

process.exit(allFilesExist && allDepsPresent ? 0 : 1);
