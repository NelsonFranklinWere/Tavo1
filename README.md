# Tavo Fusion Restaurant Website

A modern, elegant, SEO-optimized restaurant website for Tavo Fusion—an Indian fusion eatery in Nairobi, Kenya.

## 🌟 Features

- **Modern Design**: Futuristic, elegant UI with warm color palette (deep red, burnt orange, gold)
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **SEO Optimized**: Schema markup, Open Graph tags, and comprehensive meta tags
- **Accessible**: WCAG AA compliance with keyboard navigation and ARIA labels
- **Type-Safe**: Full TypeScript with strict mode
- **Fast & Performant**: Next.js 14 with App Router, optimized images, and static generation
- **Form Validation**: React Hook Form with Zod schema validation
- **Animations**: Smooth micro-interactions with Framer Motion

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom design tokens
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Playfair Display (headings) + Inter (body)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tavo-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js app router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── gallery/           # Gallery page
│   ├── menu/              # Menu page
│   ├── reservations/      # Reservations page
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles & design tokens
├── components/            # React components
│   ├── navigation.tsx     # Header navigation
│   └── footer.tsx         # Footer component
├── lib/                   # Utilities & data
│   ├── data.ts           # Menu items & restaurant info
│   ├── types.ts          # TypeScript interfaces
│   └── utils.ts          # Helper functions
└── public/               # Static assets
```

## 🎨 Design System

### Colors

- **Primary**: Deep red (#ef4444)
- **Accent**: Burnt orange (#f97316)
- **Gold**: Warm gold (#f59e0b)
- **Neutral**: Rich gray scale

### Typography

- **Headings**: Playfair Display (elegant, luxury)
- **Body**: Inter (clean, modern)

### Spacing

Uses a consistent 4px grid system for spacing.

## 📄 Pages

1. **Home**: Hero section with CTA, features, and location CTA
2. **About**: Restaurant story, chef quote, values, and location
3. **Menu**: Filterable menu with categories (Starters, Mains, Desserts, Drinks)
4. **Gallery**: Photo grid with lightbox modal
5. **Reservations**: Booking form with validation
6. **Contact**: Contact info, map, and quick actions

## 🔧 Configuration

### Update Restaurant Info

Edit `lib/data.ts` to update:
- Restaurant name, tagline, address
- Phone, email, WhatsApp
- Social media links
- Opening hours

### Update SEO Metadata

Edit `app/layout.tsx` to customize:
- Meta tags
- Open Graph images
- Schema.org markup

### Update Menu Items

Edit `lib/data.ts` to add/modify menu items:
```typescript
{
  id: string;
  name: string;
  description: string;
  price: number;
  category: "starters" | "mains" | "desserts" | "drinks";
  // ... additional properties
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Deploy the `.next` folder to any Node.js hosting platform.

## 📝 TODO / Future Enhancements

- [ ] Add actual food photography
- [ ] Integrate reservation backend API
- [ ] Add Google Maps embed
- [ ] Implement WhatsApp Business API
- [ ] Add online ordering system
- [ ] Add multi-language support (English + Swahili)
- [ ] Integrate analytics (Google Analytics)
- [ ] Add blog/news section

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📄 License

Copyright © 2025 Tavo Fusion. All rights reserved.

## 👥 Credits

Built with ❤️ using Next.js and Tailwind CSS
