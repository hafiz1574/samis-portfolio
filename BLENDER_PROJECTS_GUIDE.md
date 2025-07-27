# Blender Projects Integration Guide

## Current Structure
Your portfolio already has a professional 3D showcase section with:
- 4 project slots (Modeling, Animation, VFX, Architectural)
- Advanced CSS animations and effects
- Professional specs display
- Tool tags and categories

## How to Add Your Blender Projects

### Option 1: Local Images (Recommended for Development)

1. **Save your renders** in the `images/blender/` folder with these names:
   ```
   images/blender/character-model.jpg     (for 3D Modeling project)
   images/blender/mechanical-animation.jpg (for Animation project)
   images/blender/particle-simulation.jpg  (for VFX project)
   images/blender/interior-archviz.jpg     (for Architectural project)
   ```

2. **Update the image sources** in index.html:
   - Replace Unsplash URLs with local paths like `images/blender/character-model.jpg`

### Option 2: GitHub Hosting (Recommended for Production)

1. **Create a GitHub repository** for your images
2. **Upload your renders** to the repository
3. **Use raw.githubusercontent.com URLs** in your portfolio

Example URL format:
```
https://raw.githubusercontent.com/YOUR_USERNAME/portfolio-images/main/blender/character-model.jpg
```

### Option 3: Professional Image Hosting

Use services like:
- **Cloudinary** (free tier available)
- **Imgur** (free, good for portfolios)
- **AWS S3** (professional, paid)

## Project Types to Showcase

### 1. 3D Modeling Project
- **Best renders**: Character models, product visualization, vehicles
- **Specs to highlight**: Polygon count, render time, software version
- **Tools to mention**: Sculpting, Retopology, Texturing, Lighting

### 2. Animation Project
- **Best renders**: Mechanical animations, character animations, motion graphics
- **Specs to highlight**: Duration, frame rate, resolution
- **Tools to mention**: Rigging, Physics, Motion Blur, Compositing

### 3. VFX Project
- **Best renders**: Particle systems, fluid simulations, explosions
- **Specs to highlight**: Particle count, simulation type, volumetrics
- **Tools to mention**: Mantaflow, Volumetrics, Shading, Post-Processing

### 4. Architectural Visualization
- **Best renders**: Interior/exterior spaces, product visualization
- **Specs to highlight**: Resolution, HDRI, denoiser type
- **Tools to mention**: PBR Materials, HDRI, Denoising, Color Grading

## Customizing Project Details

Edit these sections in index.html for each project:

### Project Title & Description
```html
<h3 class="font-nav">Your Project Name</h3>
<p class="font-body">Your project description here.</p>
```

### Technical Specifications
```html
<div class="spec-item">
    <span class="spec-label">Your Spec:</span>
    <span class="spec-value">Your Value</span>
</div>
```

### Tools Used
```html
<span class="tool-tag">Your Tool</span>
```

### Category Badge
```html
<span class="category-badge modeling">Your Category</span>
```

Available categories: `modeling`, `animation`, `vfx`, `architectural`

## Adding More Projects

To add additional projects beyond the current 4:

1. **Copy a project block** from the existing HTML
2. **Update the data-category** attribute
3. **Customize all content** (image, title, description, specs)
4. **Add new category styles** in CSS if needed

## Image Optimization Tips

- **Resolution**: 800x600px minimum for web display
- **Format**: JPG for renders, PNG for transparent elements
- **Compression**: Optimize for web (70-80% quality)
- **Alt text**: Always include descriptive alt attributes

## Quick Start

1. Place your best 4 Blender renders in `images/blender/`
2. Name them: `project1.jpg`, `project2.jpg`, `project3.jpg`, `project4.jpg`
3. Let me know and I'll update the HTML with your local paths
4. Customize the project details to match your actual work

## Need Help?

Just tell me:
- What types of projects you want to showcase
- Whether you have rendered images ready
- If you prefer local hosting or online hosting
- Any specific technical details about your projects

I'll help you integrate everything perfectly!
