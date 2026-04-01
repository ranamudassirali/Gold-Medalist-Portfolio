# Gold Medalist Portfolio - AI/ML Engineer & Agentic Systems Specialist

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Showcases expertise in AI/ML engineering, agentic systems, and full-stack development with stunning animations and dark/light mode support.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Features

- Modern, professional design with glassmorphism UI elements
- Dark/Light theme toggle with smooth transitions
- Fully responsive layout optimized for all devices
- Smooth scroll animations powered by Framer Motion
- Accessibility-first approach with reduced motion support
- Comprehensive sections: Hero, Stats, About, Experience, Projects, Skills, Contact
- SEO-optimized with Next.js 15 app router
- Interactive skill bars with animated progress indicators
- Project showcase with detailed descriptions and tech stack badges

---

## Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4 + Custom animations
- **Animations:** Framer Motion 11.11
- **Icons:** Lucide React, React Icons

### Development Tools
- Linting: ESLint
- Package Manager: npm
- Build System: Next.js
- Testing: Playwright (E2E)

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage component
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with intro
│   │   ├── Stats.tsx       # Key statistics display
│   │   ├── About.tsx       # About section with resume download
│   │   ├── Experience.tsx  # Professional experience timeline
│   │   ├── Projects.tsx    # Featured projects showcase
│   │   ├── Skills.tsx      # Skills with animated progress bars
│   │   ├── Contact.tsx     # Contact form and info
│   │   └── Footer.tsx      # Footer with links
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer component
│   ├── providers/
│   │   └── ThemeProvider.tsx  # Dark/light theme context
│   └── ui/
│       ├── BackToTop.tsx   # Back to top button
│       └── ScrollProgress.tsx # Reading progress indicator
├── hooks/
│   └── useReducedMotion.ts # Accessibility hook for reduced motion
├── lib/                    # Utility functions and configurations
├── public/                 # Static assets
│   ├── profile.jpg        # Profile picture
│   ├── profile.svg        # Profile avatar fallback
│   ├── projects/          # Project screenshots
│   └── Resume _Rana Mudassir Ali.pdf
├── .env.local              # Environment variables (gitignored)
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## Featured Projects

### 1. MindMerge - Academic AI Assistant
A 100% offline, privacy-first RAG system that transforms lecture PDFs into a private knowledge base.

**Tech Stack:** Python, LangChain, Ollama (TinyLlama), FAISS, CustomTkinter

**Key Features:**
- 100% Local Inference (no cloud dependency)
- Semantic Search with Nomic Embeddings
- Source-Aware Citations
- Zero-Cost Architecture

**GitHub:** [ranamudassirali/MindMerge-RAG-Assistant](https://github.com/ranamudassirali/MindMerge-RAG-Assistant)

---

### 2. Corinna AI - Sales Ecosystem
A comprehensive AI-driven sales platform with intelligent chatbot, sentiment analysis, and automated email marketing.

**Tech Stack:** Next.js, OpenAI API, PostgreSQL, Stripe, Sentiment Analysis

**Key Features:**
- Real-time sentiment analysis for live-agent handovers
- Automated personalized email campaigns
- Smart lead management and meeting automation
- Payment integration with Stripe

**GitHub:** [ranamudassirali/corinna-test](https://github.com/ranamudassirali/corinna-test)
**Live Demo:** [corinna-ai-git-feature-knowledge-base-hzg4s-projects.vercel.app](https://corinna-ai-git-feature-knowledge-base-hzg4s-projects.vercel.app)

---

### 3. Pakistan News Agent - Autonomous Editor
An autonomous AI news editor using LangGraph State Machine and ReAct logic that thinks like a professional editor.

**Tech Stack:** Python, LangGraph, Gemini 2.5 Flash Lite, SerpAPI, Tkinter

**Key Features:**
- LangGraph State Machine (Reason + Act loop)
- Real-time News Retrieval via SerpAPI ( Pakistani news)
- Multi-threaded Desktop GUI
- Automated Editorial Ranking & Filtering

**GitHub:** *(Coming Soon)*

---

## Skills & Expertise

### AI & Agentic Logic
- LangGraph (95%)
- ReAct (Reason + Act) (90%)
- Gemini 2.5 Flash Lite (95%)
- LLMs (OpenAI, DeepSeek) (90%)
- RAG & LangChain (95%)
- CrewAI (85%)

### Web & Full-Stack
- Next.js 15 (90%)
- TypeScript (90%)
- Tailwind CSS (95%)
- Prisma ORM (85%)
- Framer Motion (85%)

### Databases & Cloud
- PostgreSQL (90%)
- Pinecone (Vector DB) (90%)
- FAISS (85%)
- Google Cloud Platform (GCP) (80%)

### Tools
- Python (Advanced) (98%)
- Git/GitHub (95%)
- Docker (85%)
- Node.js (90%)

---

## About the Developer

**Rana Mudassir Ali** - Patron's Gold Medalist with a perfect **4.0/4.0 CGPA** in BS Computer Science from COMSATS University.

An AI/ML Engineer and Agentic Systems Specialist bridging the gap between cutting-edge research and production-grade applications. Specializes in:

- Building scalable AI solutions (local RAG → cloud ML pipelines)
- Autonomous agent systems with LangGraph and ReAct
- Full-stack web development with modern React/Next.js
- Privacy-first, offline-capable AI applications

**Contact:** ranamudassirali9@gmail.com
**Location:** Lahore, Pakistan
**Open to:** AI/ML engineering opportunities

---

## Local Development

### Prerequisites
- Node.js 18+ or 20+ ([Download](https://nodejs.org/))
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ranamudassirali/Gold-Medalist-Portfolio.git
   cd Gold-Medalist-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at http://localhost:3000 |
| `npm run build` | Create production build in `.next/` directory |
| `npm run start` | Start production server (after building) |
| `npm run lint` | Run ESLint to check code quality |

---

## Deployment

This portfolio is optimized for deployment on:

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Franamudassirali%2FGold-Medalist-Portfolio)

1. Push to your GitHub repository
2. Import project in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js and deploys with optimal settings
4. Your site is live at `your-project.vercel.app`

### Netlify
1. Build project: `npm run build`
2. Deploy `.next/` folder as a static site

### Self-Hosted
```bash
npm run build
npm start
# Server runs on http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the root directory for any sensitive data:

```env
# Example (if needed):
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

**Note:** `.env.local` is already in `.gitignore` for security.

---

## Customization

### Update Personal Information
Edit the component files in `components/sections/`:
- `About.tsx` - Personal details, bio, contact info
- `Hero.tsx` - Hero section content
- `Experience.tsx` - Work experience and timeline
- `Projects.tsx` - Project showcase data
- `Skills.tsx` - Skills categories and proficiency levels
- `Contact.tsx` - Contact form and social links

### Update Resume
Replace the file in `public/Resume _Rana Mudassir Ali.pdf` with your updated resume (keep the filename or update the link in `About.tsx`).

### Update Profile Picture
Replace `public/profile.jpg` or update the reference in the components.

### Modify Theme Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Customize your primary color palette
      }
    }
  }
}
```

---

## Accessibility

- Full keyboard navigation support
- ARIA labels on interactive elements
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG guidelines

---

## Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal bundle size (~100KB gzipped)
- 100/100 Lighthouse scores on Performance, Accessibility, Best Practices, and SEO

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

MIT License - feel free to use this template for your own portfolio!

---

## Connect

- **GitHub:** [@ranamudassirali](https://github.com/ranamudassirali)
- **LinkedIn:** [Rana Mudassir Ali](https://linkedin.com/in/ranamudassirali)
- **Email:** ranamudassirali9@gmail.com

---

## Acknowledgements

- Built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com)

---

**⭐ If you like this portfolio template, consider giving it a star on GitHub!**

*Last updated: April 2025*
