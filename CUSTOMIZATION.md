# 🎨 Customization Guide

Complete guide to customizing your portfolio website.

## Content Customization

### 1. Personal Information

**File**: `components/header.tsx`
```tsx
// Update the header branding
<Link href="/" className="...">
  <span>VM</span> {/* Change to your initials */}
  <span className="hidden sm:inline">Your Name</span>
</Link>
```

**File**: `app/layout.tsx`
```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description",
  // ... update all metadata
};
```

### 2. Hero Section

**File**: `components/sections/hero.tsx`

```tsx
// Update hero text
<h1 className="...">
  Your Name <span className="text-primary">Your Tagline</span>
</h1>

<p className="...">
  Your professional headline
</p>

// Update stats
<div className="grid grid-cols-3 gap-4">
  <div>
    <p className="text-2xl font-bold">2+</p>
    <p className="...">Your Stat Label</p>
  </div>
  // ... more stats
</div>
```

**Update Profile Image**:
1. Replace `vichitra-mohan.jpg` in `public/images/user_image/`
2. Or update path in component:
```tsx
<Image
  src="/images/your-image.jpg"
  alt="Your Name"
  fill
  className="..."
/>
```

### 3. About Section

**File**: `components/sections/about.tsx`

```tsx
// Update about text
<p>I'm a passionate frontend developer with...</p>

// Update experience cards
<Card>
  <CardHeader>
    <CardTitle>Job Title</CardTitle>
    <CardDescription>Company • Date Range</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="...">
      <li>Responsibility</li>
      <li>Achievement</li>
    </ul>
  </CardContent>
</Card>

// Update stats
<div className="grid grid-cols-2 gap-4">
  <div>
    <p className="...">Label</p>
    <p className="...">Value</p>
  </div>
</div>
```

### 4. Projects Section

**File**: `components/sections/projects.tsx`

Update the `PROJECTS` array:

```tsx
const PROJECTS = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech1", "Tech2", "Tech3"],
    image: "/images/project/main.png",
    images: ["/images/project/image1.png", "/images/project/image2.png"],
    category: "Category",
    features: ["Feature1", "Feature2", "Feature3"],
  },
  // ... more projects
];
```

**Add Project Images**:
1. Create folder: `public/images/your-project/`
2. Add images to folder
3. Update paths in PROJECTS array

### 5. Skills Section

**File**: `components/sections/skills.tsx`

Update the `SKILLS` array:

```tsx
const SKILLS = [
  {
    category: "Category Name",
    skills: ["Skill1", "Skill2", "Skill3", "Skill4"],
  },
  {
    category: "Another Category",
    skills: ["SkillA", "SkillB", "SkillC"],
  },
  // ... more categories
];
```

### 6. Contact Section

**File**: `components/sections/contact.tsx`

```tsx
// Update contact information
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

<a href="tel:+91XXXXXXXXXX">
  +91 XXXXXXXXXX
</a>

<p>
  Your Address
  <br />
  Your City, Country
</p>

<a href="https://linkedin.com/in/your-profile/">
  your-profile
</a>
```

### 7. Footer

**File**: `components/footer.tsx`

```tsx
// Update footer links and social media
<a href="https://linkedin.com/in/your-profile/" target="_blank">
  <Linkedin size={20} />
</a>

<a href="https://github.com/your-profile" target="_blank">
  <Github size={20} />
</a>

<a href="mailto:your-email@example.com">
  <Mail size={20} />
</a>
```

## Styling Customization

### 1. Color Scheme

**File**: `app/globals.css`

```css
:root {
  /* Light mode colors */
  --primary: 222.2 47.6% 11.2%;          /* Main brand color */
  --secondary: 217.2 32.6% 17.5%;        /* Secondary color */
  --accent: 222.2 47.6% 11.2%;           /* Accent highlights */
  --destructive: 0 84.2% 60.2%;          /* Error/danger color */
  --background: 0 0% 100%;               /* Page background */
  --foreground: 222.2 84% 4.9%;          /* Text color */
  --muted: 222.2 84% 4.9%;               /* Muted elements */
  --muted-foreground: 222.2 14% 74%;     /* Muted text */
  --border: 214.3 31.8% 91.4%;           /* Border color */
  --input: 214.3 31.8% 91.4%;            /* Input background */
  --card: 0 0% 100%;                     /* Card background */
  --card-foreground: 222.2 84% 4.9%;     /* Card text */
}

.dark {
  /* Dark mode colors - similar structure */
}
```

**Color Format**: `hue saturation lightness`

**Tools**:
- [HSL Color Generator](https://www.rapidtables.com/web/color/hsl.html)
- [Color Picker](https://htmlcolorcodes.com/)

### 2. Typography

**File**: `app/layout.tsx`

```tsx
import { Inter, Roboto, Poppins } from "next/font/google";

// Change default font
const font = Poppins({ subsets: ["latin"] });

// Use in layout
<body className={font.className}>
```

Available fonts:
- Inter (default)
- Roboto
- Poppins
- Open Sans
- Playfair Display

### 3. Spacing & Layout

**File**: `tailwind.config.ts`

```tsx
theme: {
  extend: {
    spacing: {
      // Add custom spacing
    },
    fontSize: {
      // Add custom sizes
    },
    borderRadius: {
      // Adjust border radius
    },
  },
}
```

### 4. Dark Mode

Tailwind is configured with class-based dark mode. Add to HTML:

```tsx
<html lang="en" className="dark">
```

Or use a toggle (see next section).

## Advanced Customization

### Add Dark Mode Toggle

Create `components/theme-toggle.tsx`:

```tsx
'use client'

import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggle = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <button onClick={toggle} className="...">
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
```

Add to header:

```tsx
import { ThemeToggle } from '@/components/theme-toggle'

// In Header component
<ThemeToggle />
```

### Add New Section

1. Create `components/sections/your-section.tsx`:

```tsx
export function YourSection() {
  return (
    <section id="your-section" className="py-20">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold">Section Title</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Import in `app/page.tsx`:

```tsx
import { YourSection } from '@/components/sections/your-section'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <YourSection />  {/* Add here */}
      <Footer />
    </main>
  )
}
```

3. Add to header navigation:

```tsx
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#your-section', label: 'Your Section' },
  // ...
]
```

### Add Blog Section

1. Create `components/sections/blog.tsx`
2. Create blog posts in `content/blog/`
3. Use MDX for content

See [Next.js MDX Documentation](https://nextjs.org/docs/advanced-features/using-mdx)

### Add Newsletter Signup

Update `components/sections/contact.tsx` or create new section:

```tsx
const [email, setEmail] = useState('')

const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault()
  // Send to your email service
}

<form onSubmit={handleSubscribe}>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <Button type="submit">Subscribe</Button>
</form>
```

## Performance Optimization

### Image Optimization

Already configured! Images use Next.js optimization:

```tsx
import Image from 'next/image'

<Image
  src="/images/my-image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority  // For hero images
/>
```

### Bundle Analysis

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Update next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer(nextConfig)

# Run analysis
ANALYZE=true npm run build
```

### Code Splitting

Already handled by Next.js! Components are code-split automatically.

## SEO Optimization

### Update Metadata

**File**: `app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "A compelling description about you",
  keywords: "keyword1, keyword2, keyword3",
  openGraph: {
    title: "Your Name",
    description: "Description",
    url: "https://your-domain.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name",
  },
};
```

### Update Sitemap

**File**: `app/sitemap.ts`

Add/update URLs as needed for your projects.

### Add Structured Data

Add JSON-LD schema in layout or component:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Your Name',
      url: 'https://your-domain.com',
      jobTitle: 'Frontend Developer',
      // ... more schema properties
    }),
  }}
/>
```

## Configuration Files

### package.json

Update project information:

```json
{
  "name": "your-portfolio",
  "description": "Your portfolio description",
  "author": "Your Name",
  "license": "MIT"
}
```

### tsconfig.json

Already optimized! Includes path aliases:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]  // Access files from root with @/
    }
  }
}
```

### .env.example

Add custom environment variables as needed:

```env
NEXT_PUBLIC_SITE_NAME="Your Name"
NEXT_PUBLIC_SITE_URL="https://your-domain.com"
CUSTOM_VAR="value"
```

Then use in code:

```tsx
const siteName = process.env.NEXT_PUBLIC_SITE_NAME
```

## Deployment-Specific Customization

### Vercel

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Netlify

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Testing Your Customizations

### Local Testing

```bash
npm run dev
# Check http://localhost:3000
```

### Mobile Testing

```bash
npm run dev
# Visit from phone on same network: http://your-ip:3000
```

### Build Testing

```bash
npm run build
npm start
# Check http://localhost:3000
```

### Lighthouse Audit

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report

---

You're ready to customize! 🎨
