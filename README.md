# Md. Abu Bakar - Portfolio

A modern, futuristic personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Futuristic Design**: Glassmorphism UI, gradient backgrounds, animated blobs
- **Smooth Animations**: Page transitions, scroll reveals, hover effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Theme**: Beautiful dark theme with vibrant accent colors
- **SEO Optimized**: Proper meta tags and Open Graph configuration
- **Accessible**: Uses shadcn/ui components with proper ARIA attributes
- **Reduced Motion**: Respects `prefers-reduced-motion` preference

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Components**: shadcn/ui
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/abubakar/portfolio.git
cd portfolio-app

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── api/               # API routes
│   │   │   ├── contact/       # Contact form endpoint
│   │   │   └── projects/      # Projects data endpoint
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── projects/          # Projects page
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   └── ui/                # UI components (GlassCard, etc.)
│   ├── config/                # Site configuration
│   │   └── site.ts            # Personal info & settings
│   ├── data/                  # Data files
│   │   ├── projects.json      # Projects data
│   │   └── messages.json      # Contact messages storage
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript types
├── public/                    # Static assets
│   └── cv.pdf                 # Resume/CV file
└── README.md
```

## 📝 Customization

### Personal Information

Edit `src/config/site.ts` to update:
- Name, role, location
- Social media links
- Email address
- Highlight stats

### Projects

Edit `src/data/projects.json` to add/modify your projects:

```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Short description",
  "techStack": ["React", "Node.js"],
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "featured": true,
  "category": "web"
}
```

Categories: `web`, `backend`, `ai`, `mobile`, `other`

### Skills (About Page)

Edit the `skills` array in `src/app/about/page.tsx` to update your skills.

### CV/Resume

Replace `public/cv.pdf` with your actual resume file.

## 🎨 Theming

The theme is configured in `src/app/globals.css`. Key customization points:

- **Colors**: Modify CSS variables in `:root`
- **Glassmorphism**: Adjust `.glass` class blur and opacity
- **Gradients**: Update `gradient-text` and `glow-button` classes
- **Animations**: Modify keyframes for custom effects

## 📄 API Routes

### GET /api/projects
Returns all projects from the JSON data file.

### POST /api/contact
Handles contact form submissions. Validates input and stores messages.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Optional subject",
  "message": "Your message here"
}
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📜 License

MIT License - feel free to use for your own portfolio!

## 🤝 Contact

**Md. Abu Bakar**
- Email: abubakar@example.com
- GitHub: [@abubakar](https://github.com/abubakar)
- LinkedIn: [/in/abubakar](https://linkedin.com/in/abubakar)
