# Vichitra Mohan - Portfolio Website

A production-ready portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and shadcn UI components. Showcasing frontend development expertise with a modern, responsive design.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Tailwind CSS** for styling and responsive design
- **shadcn/ui Components** for consistent UI
- **Responsive Design** that works on all devices
- **Performance Optimized** with Next.js image optimization
- **SEO Friendly** with proper metadata and sitemap
- **Dark Mode Ready** with CSS custom properties
- **Modern Animations** with smooth transitions
- **Contact Form** with form validation
- **Project Showcase** with multiple project cards
- **Skills Section** with categorized technical skills
- **Experience Timeline** with detailed work history

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- npm or yarn package manager
- Git for version control

## 🛠️ Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Organize Image Assets

Create the `public/images` directory structure and copy your images:

```bash
# Create directory structure
mkdir -p public/images/user_image
mkdir -p public/images/assam_images
mkdir -p public/images/goa_images
mkdir -p public/images/upmsme_images

# Copy images from project_image folder:
# Copy project_image/user_image/vichitra-mohan.jpg → public/images/user_image/
# Copy project_image/assam_images/* → public/images/assam_images/
# Copy project_image/goa_images/* → public/images/goa_images/
# Copy project_image/upmsme_images/* → public/images/upmsme_images/
```

### 3. Add Resume

Place your resume PDF at: `public/resume.pdf`

Or update the resume link in `components/sections/hero.tsx`:
```tsx
<a href="/path-to-your-resume.pdf" target="_blank">
  <Button variant="ghost">
    <Download className="mr-2 h-4 w-4" />
    Resume
  </Button>
</a>
```

## 🚀 Running the Project

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Production Build

```bash
npm run build
npm start
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # SEO sitemap
│   ├── robots.ts            # Robot meta
│   └── favicon.svg          # Favicon
├── components/
│   ├── ui/
│   │   ├── button.tsx       # Button component
│   │   ├── card.tsx         # Card component
│   │   └── badge.tsx        # Badge component
│   ├── sections/
│   │   ├── hero.tsx         # Hero section
│   │   ├── about.tsx        # About section
│   │   ├── projects.tsx     # Projects showcase
│   │   ├── skills.tsx       # Skills section
│   │   └── contact.tsx      # Contact form section
│   ├── header.tsx           # Navigation header
│   └── footer.tsx           # Footer component
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   ├── images/              # Image assets
│   │   ├── user_image/
│   │   ├── assam_images/
│   │   ├── goa_images/
│   │   └── upmsme_images/
│   ├── resume.pdf           # Resume file
│   └── manifest.json        # PWA manifest
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Tailwind config
└── postcss.config.js        # PostCSS config
```

## 🎨 Customization

### Update Personal Information

Edit the following files to update personal details:

1. **app/layout.tsx** - Update metadata and SEO info
2. **components/header.tsx** - Update navigation and branding
3. **components/sections/hero.tsx** - Update introduction text
4. **components/sections/about.tsx** - Update bio and experience
5. **components/sections/projects.tsx** - Update project details
6. **components/sections/skills.tsx** - Update technical skills
7. **components/sections/contact.tsx** - Update contact information
8. **components/footer.tsx** - Update footer links and social media

### Customize Colors

Edit `app/globals.css` to change the color scheme:

```css
:root {
  --primary: 222.2 47.6% 11.2%;        /* Change primary color */
  --secondary: 217.2 32.6% 17.5%;      /* Change secondary color */
  --accent: 222.2 47.6% 11.2%;         /* Change accent color */
  /* ... other colors */
}
```

### Update Social Links

Update social media links in:
- `components/footer.tsx`
- `components/sections/contact.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimization

The portfolio includes:

- Dynamic metadata in `app/layout.tsx`
- Sitemap generation in `app/sitemap.ts`
- Robots.txt in `app/robots.ts`
- Open Graph meta tags
- Twitter Card meta tags
- Structured data ready

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- Render
- AWS Amplify
- Google Cloud Run
- DigitalOcean

## 📦 Dependencies

### Core

- **next**: ^15.1.3 - React framework
- **react**: ^18.3.1 - UI library
- **typescript**: ^5.4.5 - Type safety

### UI & Styling

- **tailwindcss**: ^3.4.3 - Utility-first CSS
- **tailwindcss-animate**: ^1.0.7 - Animation utilities
- **class-variance-authority**: ^0.7.0 - Variant management
- **clsx**: ^2.1.1 - Conditional classnames
- **tailwind-merge**: ^2.4.0 - Merge Tailwind classes

### Icons

- **lucide-react**: ^0.408.0 - Beautiful icons

### Utilities

- **@radix-ui/react-slot**: ^2.0.2 - Composition primitive

## 📄 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or feedback:

- Email: mohanvichitra@gmail.com
- Phone: +91 8318474387
- LinkedIn: [vichitra-mohan](https://linkedin.com/in/vichitra-mohan-933811255/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## ✨ Features Roadmap

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Comments system
- [ ] Downloadable resume
- [ ] Project filtering
- [ ] Search functionality

---

Built with ❤️ by Vichitra Mohan
