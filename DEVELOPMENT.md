# 🐛 Development & Debugging Guide

Guide for developing and debugging your portfolio website.

## Development Environment Setup

### VS Code Extensions

Recommended extensions for optimal development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - ID: `dsznajder.es7-react-js-snippets`
   - Provides helpful code snippets

2. **Prettier - Code Formatter**
   - ID: `esbenp.prettier-vscode`
   - Automatic code formatting

3. **ESLint**
   - ID: `dbaeumer.vscode-eslint`
   - Code quality checking

4. **Tailwind CSS IntelliSense**
   - ID: `bradlc.vscode-tailwindcss`
   - Tailwind class autocomplete

5. **Thunder Client** or **REST Client**
   - For testing API calls

### VS Code Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Running the Development Server

### Start Dev Server

```bash
npm run dev

# Or specify a different port
npm run dev -- -p 3001
```

**Output**:
```
➜  Local:        http://localhost:3000
➜  Environments: .env.local

✓ Ready in 1234ms
```

### Access from Other Devices

Find your local IP:

**Windows**:
```bash
ipconfig
# Look for IPv4 Address
```

**macOS/Linux**:
```bash
ifconfig
# Look for inet
```

Then visit: `http://YOUR_IP:3000`

## Code Quality Tools

### Linting

```bash
# Check for issues
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Type Checking

```bash
# Check TypeScript types
npx tsc --noEmit

# Watch mode
npx tsc --noEmit --watch
```

### Build Testing

```bash
# Build for production
npm run build

# Check for build errors
npm run build 2>&1 | tee build.log
```

## Common Issues & Solutions

### Issue: Port 3000 Already in Use

**Solution**:
```bash
# Use different port
npm run dev -- -p 3001

# Or kill process on port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

### Issue: Images Not Loading

**Check**:
1. File exists in `public/images/` folder
2. Path is correct in component
3. File name is exact (case-sensitive)

**Debug**:
```tsx
console.log('Image src:', '/images/my-image.jpg')
```

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

### Issue: Hot Reload Not Working

**Solution**:
1. Save file again
2. Check for syntax errors
3. Restart dev server

### Issue: Module Not Found

**Error**: `Cannot find module '@/components/...'`

**Solution**:
1. Check file path is correct
2. Check tsconfig.json paths configuration
3. Restart dev server

```bash
npm run dev
```

### Issue: TypeScript Errors

**Error**: `Type 'X' is not assignable to type 'Y'`

**Solution**:
1. Hover over error in VS Code
2. Read the suggestion
3. Fix according to suggestion

**Common fix**:
```tsx
// ❌ Wrong
const data = data as Project[]

// ✅ Correct
const data: Project[] = formattedData
```

### Issue: Tailwind Classes Not Applied

**Check**:
1. Class name is valid Tailwind class
2. Class is in `content` array in tailwind.config.ts
3. Not using @apply incorrectly

**Solution**:
```bash
# Rebuild Tailwind
npm run build

# Or restart dev server
npm run dev
```

### Issue: Next.js Build Fails

**Debug steps**:

```bash
# Check build log
npm run build 2>&1

# Check for specific errors
npm run lint

# Type check
npx tsc --noEmit

# Check dependencies
npm audit

# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Debugging Techniques

### Browser DevTools

1. **Open DevTools**: `F12`
2. **Console Tab**: Check for errors
3. **Network Tab**: Check API calls
4. **Elements Tab**: Inspect HTML
5. **Lighthouse Tab**: Performance audit

### React DevTools

Install: [React DevTools Chrome Extension](https://chrome.google.com/webstore/detail/react-developer-tools)

Usage:
1. Inspect React components
2. Check props and state
3. Profile performance

### Next.js Debug Info

Check `.next/` folder:
```bash
ls -la .next/
```

View generated files and source maps

### Console Logging

```tsx
export function MyComponent() {
  console.log('Component rendered')
  
  useEffect(() => {
    console.log('Effect ran')
  }, [])

  return <div>Content</div>
}
```

View in DevTools Console tab

### VS Code Debugging

1. Install Node debugger extension (built-in)
2. Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

3. Set breakpoints and press F5

## Performance Debugging

### Check Bundle Size

```bash
npm run build
# Check .next/static/chunks/ folder size
```

### Analyze Performance

```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Create next.config.js update (see docs)

# Run analysis
ANALYZE=true npm run build
```

### Check Core Web Vitals

1. Run local build: `npm run build && npm start`
2. Open DevTools → Lighthouse
3. Generate report
4. Check Core Web Vitals

### Profile with React

```tsx
'use client'

import { Profiler } from 'react'

export function MyComponent() {
  const onRenderCallback = (id, phase, actualDuration) => {
    console.log(`${id} (${phase}) took ${actualDuration}ms`)
  }

  return (
    <Profiler id="MyComponent" onRender={onRenderCallback}>
      {/* Component content */}
    </Profiler>
  )
}
```

## Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Images load properly
- [ ] Forms submit correctly
- [ ] Links navigate to correct pages
- [ ] Mobile responsive layout
- [ ] Dark mode (if enabled)
- [ ] Contact form validation
- [ ] Project images display
- [ ] Resume downloads
- [ ] Social links work

### Accessibility Testing

```bash
# Install axe DevTools extension
# Check for accessibility issues
```

Check:
- Color contrast
- Keyboard navigation
- Screen reader compatibility
- ARIA labels

### SEO Testing

1. Open DevTools
2. Check meta tags in `<head>`
3. Verify Open Graph tags
4. Check sitemap.xml
5. Test robots.txt

## Git Workflow

### Branch Strategy

```bash
# Create feature branch
git checkout -b feature/add-blog-section

# Make changes
git add .
git commit -m "Add blog section"

# Push to remote
git push origin feature/add-blog-section

# Create Pull Request on GitHub
```

### Commit Messages

Follow conventional commits:

```bash
git commit -m "feat: add blog section"
git commit -m "fix: resolve image loading issue"
git commit -m "docs: update README"
git commit -m "style: format code"
git commit -m "test: add unit tests"
```

## Environment Variables

### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_NAME="Your Name"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### Production Deployment

Set environment variables in deployment platform:
- Vercel: Dashboard → Settings → Environment Variables
- Netlify: Site Settings → Build & Deploy → Environment

### Secret Variables

For sensitive data:

```env
# Don't include NEXT_PUBLIC_ for secrets
SECRET_KEY=value
```

Access only on server side (not in browser)

## Performance Tips

### Optimize Images

```tsx
import Image from 'next/image'

<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={630}
  priority  // For above-the-fold images
  quality={75}  // Compress: 1-100
/>
```

### Code Splitting

Already automatic! But you can optimize with dynamic imports:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('@/components/heavy'),
  { loading: () => <div>Loading...</div> }
)
```

### Font Optimization

```tsx
import { Inter, Poppins } from 'next/font/google'

// Pre-connect to Google Fonts CDN
const font = Inter({
  subsets: ['latin'],
  display: 'swap',  // Prevent layout shift
})
```

## Documentation

### Code Comments

```tsx
/**
 * Hero section component
 * Displays main introduction with CTA buttons
 */
export function HeroSection() {
  return (
    // Hero content
  )
}
```

### README Updates

Keep README.md current with:
- Setup instructions
- Deployment notes
- Known issues
- Roadmap

### CHANGELOG

Document changes:

```markdown
## [1.0.0] - 2024-01-15

### Added
- Initial portfolio launch
- Hero section
- Projects showcase
- Contact form

### Fixed
- Image loading issue
- Mobile responsiveness
```

## Support & Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Helpful Tools
- [Vercel Edge Network Status](https://vercel.status.page/)
- [Can I Use](https://caniuse.com/) - Browser support
- [MDN Web Docs](https://developer.mozilla.org/)
- [Dev.to](https://dev.to/) - Articles

### Community
- [Next.js Discussions](https://github.com/vercel/next.js/discussions)
- [React Discord](https://discord.gg/react)
- [Tailwind Discord](https://tailwindcss.com/discord)

---

Happy debugging! 🚀
