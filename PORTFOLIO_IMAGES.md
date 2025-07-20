# Portfolio Image Guide

## Adding Portfolio Images

To add images to your portfolio projects, follow these steps:

### 1. Image Requirements
- **Format**: WebP, JPG, or PNG
- **Dimensions**: 1200x800px (aspect ratio 3:2) for best results
- **File size**: Under 500KB for optimal performance
- **Naming**: Use descriptive names (e.g., `rosebud-quilting.webp`)

### 2. Image Locations
Place your portfolio images in: `/public/images/portfolio/`

Current structure:
```
public/
  images/
    portfolio/
      cdent.webp            ✅ (exists)
      rosebud.webp          ✅ (exists)
      44th.webp             ✅ (exists)
      ecommerce-demo.webp      (needed)
      business-suite.webp      (needed)
      analytics-dashboard.webp (needed)
```

### 3. Capturing Screenshots

#### For Live Websites:
1. **Browser Screenshot Tools**:
   - Chrome DevTools: F12 → Device Toolbar → Screenshot
   - Firefox DevTools: F12 → Screenshot full page
   - Extensions: Full Page Screen Capture, GoFullPage

2. **Online Tools**:
   - https://www.screenshotmachine.com/
   - https://www.websiteplanet.com/webtools/free-screenshot/
   - https://screenshots.cloud/

3. **Desktop Apps**:
   - macOS: Cmd+Shift+4 (area) or Cmd+Shift+3 (full screen)
   - Windows: Snipping Tool or Win+Shift+S
   - CrossPlatform: Lightshot, Greenshot

#### For Demo/Concept Projects:
1. **Design Mockups**: Create in Figma, Sketch, or Canva
2. **Code Screenshots**: Show the application interface
3. **Architecture Diagrams**: For system design projects
4. **Dashboard Views**: For analytics/business applications

### 4. Image Optimization

#### Before adding to project:
```bash
# Using imageoptim (macOS)
brew install imageoptim-cli
imageoptim --directory public/images/portfolio/

# Using squoosh (web-based)
# Visit https://squoosh.app/

# Using tinypng (online)
# Visit https://tinypng.com/
```

### 5. Updating Portfolio Data

Once you have the images, update the image paths in:
`src/lib/portfolio_data.ts`

```typescript
{
  id: 2,
  name: "Rosebud Quilting",
  // ... other fields
  image: "/images/portfolio/rosebud-quilting.webp", // ← Update this
}
```

### 6. Alternative: Using Placeholder Generation

If you need temporary placeholders while working on real screenshots:

```typescript
// You can use services like:
image: "https://via.placeholder.com/1200x800/C73E1D/ffffff?text=Project+Name"
// or
image: "https://picsum.photos/1200/800?random=1"
```

### 7. SEO-Friendly Image Practices

1. **Alt Text**: Descriptive alt text is already implemented
2. **File Names**: Use descriptive names with keywords
3. **Image Compression**: Keep file sizes small
4. **Responsive**: Images are responsive by default
5. **Loading**: Consider lazy loading for performance

### 8. Current Implementation

The portfolio page now includes:
- ✅ Image error handling
- ✅ Fallback icons when images fail to load
- ✅ Responsive image display
- ✅ Hover effects and transitions
- ✅ Status badges overlay
- ✅ Modal view with larger images

Your CD Entertainment image (`cdent.webp`) will display properly. Other projects will show a placeholder icon until you add their respective images.

## Quick Start

1. Take screenshots of your live projects (Rosebud Quilting, 44th Street Tattoo)
2. Create mockups for demo projects (E-Commerce, Business Suite, Analytics Dashboard)  
3. Optimize images and save them in `/public/images/portfolio/`
4. Update the image paths in `portfolio_data.ts`
5. Test the portfolio page to ensure images load correctly
