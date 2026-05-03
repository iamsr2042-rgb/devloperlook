# DeveloperLook Frontend

A modern React portfolio and showcase website built with Vite, React Router, and Tailwind CSS.

## Features

- **No Backend Required** - Uses Mock Service Worker (MSW) for API calls
- **React Router** - Client-side routing
- **Responsive Design** - Mobile-first approach
- **Framer Motion** - Smooth animations
- **Dark Mode Support** - Theme switching
- **Accessible Components** - Built with Radix UI

## Quick Start

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:5173` with hot reload enabled.

### Build for Production
```bash
npm run build
```

## Project Structure

```
src/
├── pages/           # Page components (Home, About, Blog, etc)
├── components/      # Reusable UI components
├── config/          # API configuration
├── lib/             # Utilities and helpers
├── mocks/           # Mock API handlers (MSW)
├── App.jsx          # Main app with routes
└── main.jsx         # Entry point
```

## Mock API

The frontend uses **Mock Service Worker (MSW)** to simulate API responses without needing a backend server.

### Available Mock Endpoints

- **Projects** - Get, create, update, delete projects
- **Blog** - Get blog posts
- **Contact** - Submit contact form
- **Services** - Get available services
- **Auth** - Register, login, logout

See `MOCK_API.md` for detailed documentation.

## Using with Real Backend

When you have a backend running:

1. Start the Express backend:
   ```bash
   cd backend
   npm run dev
   ```

2. MSW will automatically bypass to the real API

3. Update `VITE_API_URL` in `.env` if using different address

## Pages

- **Home** - Landing page with hero section
- **About** - Team and company information
- **Services** - Services offered
- **Portfolio** - Project showcase (fetches from API)
- **Blog** - Blog posts (fetches from API)
- **Contact** - Contact form with validation

## Components

### UI Components (Radix UI)
- Button, Card, Dialog, Dropdown, Form controls, etc.

### Custom Components
- Navbar - Navigation bar with mobile menu
- Footer - Footer with links and social media
- Section - Wrapper for page sections
- Theme Provider - Dark/light mode support

## Technologies

- **React 19** - UI library
- **Vite** - Build tool
- **React Router v7** - Client routing
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **MSW** - API mocking
- **Axios** - HTTP client
- **Lucide React** - Icons

## Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

## Development

### Add a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Update navbar links in `src/components/navbar.jsx`

### Add a New Component

1. Create in `src/components/ComponentName.jsx`
2. Import and use in pages

### Add a New API Endpoint

1. Edit `src/mocks/handlers.js`
2. Add handler to `handlers` export
3. Use in components with axios

## Styling

- Uses Tailwind CSS v4 with design tokens
- Custom CSS variables in `src/globals.css`
- Responsive breakpoints: sm, md, lg, xl, 2xl
- Dark mode support via theme provider

## Performance

- Lazy loading routes with React.lazy
- Optimized images with proper sizing
- CSS-in-JS with Tailwind purging
- Production build optimizations

## Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

```bash
npm run build
# Upload dist/ folder
```

## Troubleshooting

**Port 5173 in use?**
```bash
npm run dev -- --port 5174
```

**MSW not intercepting?**
- Check browser console for MSW messages
- Verify endpoint matches handlers.js

**Styling issues?**
- Clear browser cache (Ctrl+Shift+R)
- Rebuild: `npm run build`

## Learn More

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Router](https://reactrouter.com)
- [MSW Documentation](https://mswjs.io)
