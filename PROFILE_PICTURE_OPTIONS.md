# Profile Picture Options for Your Portfolio

## Current Implementation
Your profile picture has been enhanced with:
- ✅ Gradient border effect
- ✅ Smooth hover animations
- ✅ Better image filters (brightness, contrast, saturation)
- ✅ Professional overlay effects
- ✅ Fallback image support
- ✅ Enhanced decorative elements

## Available Images
You have these profile images available:

### Option 1: Current (Recommended)
```tsx
src="/src/assets/profile-photo.jpg"
```

### Option 2: Placeholder
```tsx
src="/src/assets/profile-placeholder.jpg"
```

### Option 3: Uploaded Image
```tsx
src="/lovable-uploads/923aced1-e969-4089-9eef-0d80eb265732.png"
```

## How to Change Your Profile Picture

### Method 1: Replace Existing Image
1. Save your new profile picture as `profile-photo.jpg`
2. Replace the file in `src/assets/` folder
3. The website will automatically use the new image

### Method 2: Change Image Source
Edit the `src` attribute in `PortfolioHome.tsx` line ~211:

```tsx
// Change this line to use a different image
src="/src/assets/profile-photo.jpg"
```

## Image Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px or larger (square aspect ratio)
- **Quality**: High resolution for crisp display
- **Background**: Clean background or transparent PNG

## Tips for Best Results
1. Use a professional headshot
2. Face should be clearly visible
3. Good lighting and contrast
4. Centered composition
5. High quality/resolution image
