# reCAPTCHA Setup Guide

## Getting Your reCAPTCHA Keys

### Step 1: Visit Google reCAPTCHA Console
Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create)

### Step 2: Create a New Site
1. Click "+" to create a new site
2. Enter your site label (e.g., "My Portfolio Website")
3. Select reCAPTCHA type: **reCAPTCHA v2** → "I'm not a robot" Checkbox
4. Add your domains:
   - `localhost` (for development)
   - `sahayasavari.web.app` (your production domain)
   - `sahayasavari.firebaseapp.com` (Firebase default domain)

### Step 3: Get Your Keys
After creating the site, you'll receive:
- **Site Key** (Public key - goes in your frontend)
- **Secret Key** (Private key - for backend verification)

### Step 4: Update Environment Variables
Update the `.env` file with your actual keys:

```env
# Your actual reCAPTCHA keys
VITE_RECAPTCHA_SITE_KEY=6LeRrIwrAAAAAM_GgcdtCENdXDgz0gT46sjRW63f
VITE_RECAPTCHA_SECRET_KEY=6LeRrIwrAAAAAMc0ogzwxGSppI0IoA2qpkaKU1aL
```

**Important Security Notes:**
- The site key (public) is safe to expose in frontend code
- The secret key should NEVER be exposed in frontend code
- For production, use environment variables or secure config management
- The secret key is only used for backend verification

### Step 5: Backend Integration (Optional)
For production, you should verify the CAPTCHA on your backend:

```javascript
// Example backend verification (Node.js/Express)
const axios = require('axios');

app.post('/api/contact', async (req, res) => {
  const { captchaToken, name, email, message } = req.body;
  
  // Verify CAPTCHA with Google
  const verificationResponse = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    null,
    {
      params: {
        secret: process.env.RECAPTCHA_SECRET_KEY,
        response: captchaToken
      }
    }
  );
  
  if (verificationResponse.data.success) {
    // Process the form submission
    // Send email, save to database, etc.
    res.json({ success: true, message: 'Message sent successfully!' });
  } else {
    res.status(400).json({ success: false, message: 'CAPTCHA verification failed' });
  }
});
```

## Features Implemented

✅ **reCAPTCHA v2 Integration**
- Checkbox "I'm not a robot" verification
- Automatic theme detection (light/dark mode)
- Mobile-responsive design

✅ **Form Enhancements**
- Form state management
- Input validation
- Loading states during submission
- Error handling with toast notifications

✅ **Security Features**
- CAPTCHA validation before form submission
- Environment variable for secure key storage
- Client-side and server-side verification ready

✅ **User Experience**
- Smooth animations
- Clear error messages
- Responsive design
- Accessibility compliance

## Testing
1. **Development**: Uses test keys that always pass
2. **Production**: Replace with your actual keys from Google Console

## Troubleshooting

### Common Issues:
1. **CAPTCHA not loading**: Check if the site key is correct
2. **Domain mismatch**: Ensure your domain is added in reCAPTCHA console
3. **Dark theme issues**: The custom Captcha component handles theme switching automatically

### Test Site Key (Development Only):
`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`

**Note**: This test key always passes validation and should only be used for development.
