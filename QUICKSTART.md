# 🚀 Quick Start Guide

Welcome to your production-ready portfolio website! Follow these steps to get started.

## Step 1: Run the Setup Script

### On Windows:
```bash
setup.bat
```

### On macOS/Linux:
```bash
chmod +x setup.sh
./setup.sh
```

This script will:
- ✅ Check if Node.js is installed
- ✅ Install all dependencies
- ✅ Create image directories
- ✅ Copy images from project_image folder to public/images
- ✅ Create .env.local configuration file

## Step 2: Configure Your Information

### Update Environment Variables
Edit `.env.local`:
```env
NEXT_PUBLIC_SITE_NAME="Vichitra Mohan"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
NEXT_PUBLIC_EMAIL="your-email@example.com"
NEXT_PUBLIC_PHONE="+91 XXXXXXXXXX"
NEXT_PUBLIC_LINKEDIN="https://linkedin.com/in/your-profile/"
```

### Update Contact Information
Edit `components/sections/contact.tsx`:
- Update email address
- Update phone number
- Update LinkedIn profile
- Update location

### Update Social Links
Edit `components/footer.tsx`:
- Update LinkedIn URL
- Update GitHub URL
- Update email address

## Step 3: Add Your Resume

Place your resume PDF at: `public/resume.pdf`

## Step 4: Verify Images

Check that images are properly placed in:
```
public/
├── images/
│   ├── user_image/
│   │   └── vichitra-mohan.jpg
│   ├── assam_images/
│   │   ├── about.png
│   │   ├── main.png
│   │   └── workshop.png
│   ├── goa_images/
│   │   ├── about.png
│   │   ├── main.png
│   │   └── scheme.png
│   └── upmsme_images/
│       ├── info.png
│       ├── main.png
│       └── SCHEME-ANALYTICS.png
```

## Step 5: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 6: Build for Production

```bash
npm run build
npm start
```

## 📁 Key Files to Customize

### Content Files:
1. **app/layout.tsx** - Meta tags and SEO
2. **components/sections/hero.tsx** - Hero section & intro
3. **components/sections/about.tsx** - About & experience
4. **components/sections/projects.tsx** - Project showcase
5. **components/sections/skills.tsx** - Technical skills
6. **components/sections/contact.tsx** - Contact info

### Styling:
1. **app/globals.css** - Global styles and colors
2. **tailwind.config.ts** - Tailwind theme configuration

## 🎨 Customization Tips

### Change Color Scheme
Edit `app/globals.css` CSS variables:
```css
:root {
  --primary: 222.2 47.6% 11.2%;       /* Main color */
  --secondary: 217.2 32.6% 17.5%;     /* Secondary color */
  --accent: 222.2 47.6% 11.2%;        /* Accent color */
}
```

### Update Navigation Links
Edit `components/header.tsx` navLinks array

### Add New Sections
1. Create a new component in `components/sections/`
2. Import it in `app/page.tsx`
3. Add to the main layout

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify
1. Push to GitHub
2. Connect to [netlify.com](https://netlify.com)
3. Configure build: `npm run build`
4. Deploy

### Other Options
- Railway.app
- Render.com
- DigitalOcean
- AWS Amplify
- Google Cloud Run

## 📊 Performance Checklist

- [ ] Images are optimized
- [ ] Resume PDF is added
- [ ] All social links are updated
- [ ] Contact form is tested
- [ ] Mobile view is checked
- [ ] Dark mode is tested
- [ ] SEO metadata is updated
- [ ] Analytics is set up (optional)

## 🔧 Troubleshooting

### Images not showing?
1. Check if images are in `public/images/` folder
2. Verify file paths in component files
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild: `npm run dev`

### Build fails?
1. Clear dependencies: `rm -rf node_modules && npm install`
2. Check TypeScript errors: `npm run lint`
3. Verify all imports are correct

### Port 3000 already in use?
```bash
npm run dev -- -p 3001
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Vercel Deployment](https://vercel.com/docs)

## ✨ Next Steps

1. ✅ Run setup script
2. ✅ Update your information
3. ✅ Add resume PDF
4. ✅ Test locally with `npm run dev`
5. ✅ Build for production: `npm run build`
6. ✅ Deploy to your preferred platform
7. ✅ Set up custom domain
8. ✅ Monitor with analytics

## 💡 Pro Tips

- Use `npm run lint` to check for code issues
- Test on mobile: `npm run dev` then visit from your phone on the same network
- Use Chrome DevTools for debugging
- Set up GitHub Actions for automatic deployments
- Add analytics to track visitors

## 📞 Support

For issues or questions:
- Check the README.md
- Review Next.js documentation
- Check component comments in the code

---

Happy coding! 🎉
