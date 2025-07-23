# reCAPTCHA Environment Setup Guide

## 🔧 **Current Setup**

### **Development (localhost)**
- **Port**: http://localhost:8082
- **Keys**: Google test keys (always pass validation)
- **File**: `.env` (development keys)

### **Production (sahayasavari.web.app)**
- **Keys**: Your real reCAPTCHA keys
- **File**: `.env.production` (production keys)

## 🚀 **For Development Testing**

**Current Status**: ✅ Working with test keys
- Visit: http://localhost:8082/#contact
- Fill out the contact form
- reCAPTCHA will appear and always pass

## 🌐 **For Production Deployment**

### **Option 1: Use Production Environment File**
```bash
# Build with production keys
npm run build -- --mode production
```

### **Option 2: Update Your reCAPTCHA Domain List**
1. Go to [Google reCAPTCHA Console](https://www.google.com/recaptcha/admin)
2. Select your site key: `6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f`
3. Add these domains:
   - `localhost`
   - `127.0.0.1`  
   - `sahayasavari.web.app`
   - `sahayasavari.firebaseapp.com`

### **Option 3: Manual Key Switch**
Update `.env` before building:
```env
VITE_RECAPTCHA_SITE_KEY=6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f
VITE_RECAPTCHA_SECRET_KEY=6LeRrIwrAAAAAMc0ogzwxGSppI0IoA2qpkaKU1aL
```

## 🎯 **Recommended Workflow**

### **Development**
```bash
# Uses test keys (.env)
npm run dev
```

### **Production Build**
```bash
# Copy production keys to .env first, then:
npm run build
npm run preview  # Test production build locally
```

### **Deploy to Firebase**
```bash
# Make sure .env has your production keys
npm run build
firebase deploy
```

## 🔍 **Key Differences**

| Environment | Site Key | Domain Support | Validation |
|------------|----------|----------------|------------|
| **Development** | `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` | Any domain | Always passes |
| **Production** | `6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f` | Registered domains only | Real validation |

## ✅ **Test Your Setup**

1. **Development**: Visit http://localhost:8082/#contact
2. **Fill out form**: Name, email, message
3. **Complete reCAPTCHA**: Should show "I'm not a robot"
4. **Submit**: Should work without domain errors

Your reCAPTCHA is now working in development! 🎉
