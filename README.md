# Pixelated Minimalist Portfolio

A unique portfolio website combining **pixelated/8-bit aesthetic** with **minimalist white/gray colors** and **smooth modern animations**.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icons

## Features

- Pixelated design elements with CSS box-shadows
- Smooth scroll animations
- Responsive design (mobile, tablet, desktop)
- Monospace typography throughout
- Typing animation on hero section
- Timeline-style experience section
- Project cards with hover effects
- Accessible (skip links, ARIA labels, keyboard navigation)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

All placeholder content is in `src/lib/data.ts`. Update these values with your own information:

```typescript
// src/lib/data.ts

export const siteConfig = {
  name: '[YOUR_NAME]',          // Your name
  title: 'Full Stack Developer', // Your title
  bio: '...',                    // Your bio
  email: 'hello@example.com',    // Your email
};

export const experiences = [...];  // Your work experience
export const projects = [...];     // Your projects
export const skills = [...];       // Your skills
export const socialLinks = [...];  // Your social links
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles & pixel utilities
├── components/
│   ├── Navigation.tsx   # Fixed navigation bar
│   ├── Hero.tsx         # Hero section with typing effect
│   ├── About.tsx        # About section with skills
│   ├── Experience.tsx   # Timeline experience section
│   ├── Projects.tsx     # Project cards grid
│   ├── Contact.tsx      # Contact links
│   ├── Footer.tsx       # Footer
│   └── ui/              # Reusable UI components
│       ├── PixelBox.tsx
│       ├── PixelButton.tsx
│       ├── PixelBadge.tsx
│       ├── ScrollAnimation.tsx
│       └── SectionTitle.tsx
├── lib/
│   └── data.ts          # Site content & configuration
└── types/
    └── index.ts         # TypeScript interfaces
```

## Design System

### Colors (Minimalist Palette)

- **Background:** #FAFAFA (off-white)
- **Cards:** #FFFFFF (white)
- **Text:** #0A0A0A (near black)
- **Accent:** #171717 (dark gray)
- **Muted:** #737373, #A3A3A3

### Pixel Borders

The pixel border effect is achieved using CSS box-shadows:

```css
.pixel-border {
  box-shadow:
    0 -2px 0 0 #171717,
    2px 0 0 0 #171717,
    0 2px 0 0 #171717,
    -2px 0 0 0 #171717;
}
```

## Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## License

MIT License - feel free to use this template for your own portfolio!
