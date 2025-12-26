# The Mountain Whisper

A thoughtfully designed website for curated Himalayan experiences — designed for clarity, rest, and meaningful work.

## Overview

The Mountain Whisper is a Next.js application that showcases curated journeys and work experiences in the Himalayas. The site emphasizes stillness, elevation, and intentional living through a minimalist, elegant design.

## Features

- **Landing Page** with hero video, philosophy section, and ways to experience
- **Journey Listings** with detailed journey cards
- **Journey Detail Pages** with comprehensive information about each journey
- **Work From the Himalayas** page for remote work experiences
- **Enquiry Form** for booking and inquiries
- **Responsive Design** optimized for all devices
- **Smooth Animations** and transitions throughout
- **Dynamic Navigation** that adapts based on page context

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **React**: 19.2.3

## Project Structure

```
42-nepal/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── HeroVideo.tsx
│   │   ├── JourneyCard.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── corporate/          # Corporate page
│   ├── enquire/            # Enquiry page and form
│   ├── journeys/           # Journey pages
│   │   ├── [slug]/        # Dynamic journey detail pages
│   │   └── page.tsx        # Journey listing page
│   ├── philosophy/         # Philosophy page
│   ├── work-from-the-himalayas/  # Work experience page
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Landing page
├── data/
│   └── journeys.ts         # Journey data
├── public/                 # Static assets (images, videos)
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 42-nepal
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

For the enquiry form email functionality, create a `.env.local` file in the root directory with the following variables:

```env
# Resend API Key (get from https://resend.com)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Email address to receive enquiries
OWNER_EMAIL=hello@themountainwhisper.com

# Email address to send from (must be verified in Resend)
# Format: "Display Name <email@domain.com>"
FROM_EMAIL="The Mountain Whisper <no-reply@themountainwhisper.com>"

# Optional: Site URL for email context
NEXT_PUBLIC_SITE_URL=https://themountainwhisper.com
```

**Note**: Before deploying to production:
1. Sign up for a Resend account at https://resend.com
2. Verify your sending domain in Resend
3. Add these environment variables to your Vercel project settings (or your deployment platform)
4. The `FROM_EMAIL` domain must be verified in Resend before emails will send

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

#### Navigation
- Dynamic navbar that changes color based on page context
- White text on dark backgrounds (home, journeys listing)
- Dark text on light backgrounds (journey details, enquire)
- Smooth scroll for anchor links

#### HeroVideo
- Background video component with slow-motion playback
- 3-second loop with smooth transitions
- Optimized for performance

#### JourneyCard
- Enhanced card design with hover effects
- Image zoom on hover
- Smooth animations and shadows

#### EnquireForm
- Contact form with validation
- Rounded corners and enhanced styling
- Pre-filled messages based on journey selection

## Styling

The project uses Tailwind CSS with a custom color palette:

- **Primary Colors**: `#3d5a7a`, `#2d4a6a` (buttons, links)
- **Background**: `#f8f6f3` (warm off-white)
- **Text**: `#2d3a47`, `#4a5560` (various shades)
- **Borders**: `#e8e6e3`, `#9ca5b3`

### Design Principles

- **Minimalism**: Clean, uncluttered layouts
- **Typography**: Relaxed line-height for readability
- **Spacing**: Generous padding and margins
- **Animations**: Smooth, subtle transitions
- **Rounded Corners**: Consistent use of `rounded-lg` and `rounded-xl`

## Content Management

Journey data is managed in `data/journeys.ts`. To add or modify journeys:

1. Edit `data/journeys.ts`
2. Follow the existing `Journey` type structure
3. Add images to `public/` directory
4. The changes will automatically reflect across the site

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

Build the production version:
```bash
npm run build
npm run start
```

## Features in Detail

### Landing Page
- Hero section with slow-motion video background
- Philosophy section explaining core values
- Ways to Experience cards
- Why the Himalayas section
- Founder message
- Call-to-action sections

### Journey Pages
- Grid layout of journey cards
- Individual journey detail pages with:
  - Hero section
  - Who it's for
  - What it offers
  - Daily rhythm
  - Sample itinerary
  - Enquiry CTA

### Work From the Himalayas
- Dedicated page for remote work experiences
- Information about the program
- Target audience details

### Enquiry System
- Dynamic form that pre-fills based on journey selection
- URL parameters for journey-specific enquiries
- Form validation and user feedback
- Email integration via Resend:
  - Sends enquiry to owner email
  - Sends confirmation email to user
  - Includes honeypot spam protection
  - Rate limiting (3 requests per minute per IP)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images with Next.js Image component
- Video optimization with lazy loading
- Code splitting with Next.js App Router
- Minimal JavaScript bundle size

## License

Private project - All rights reserved.

## Contact

For inquiries about The Mountain Whisper experiences, use the enquiry form on the website.

---

Built with intention and care.
