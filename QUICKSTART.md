# Quick Start Guide - DeveloperLook MERN Stack

Get your MERN application running in 5 minutes!

## Step 1: Prerequisites Check

Verify you have:
- Node.js v16+ : `node --version`
- npm v8+ : `npm --version`
- MongoDB running (or MongoDB Atlas account)

## Step 2: Install Dependencies

```bash
npm install
```

This installs everything for both frontend and backend.

## Step 3: Configure Backend

Create and edit `backend/.env`:

```bash
cp backend/.env.example backend/.env
```

Edit the file with:
```env
# For local MongoDB
MONGODB_URI=mongodb://localhost:27017/devloperlook

# For MongoDB Atlas (recommended)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/devloperlook

# Change this to a random string
JWT_SECRET=mysupersecretjwtkeythatshouldbechanged12345

PORT=5000
NODE_ENV=development
```

## Step 4: Configure Frontend

Create and edit `frontend/.env`:

```bash
cp frontend/.env.example frontend/.env
```

The default is usually fine:
```env
VITE_API_URL=http://localhost:5000
```

## Step 5: Start the Application

```bash
npm run dev
```

This starts both:
- **Backend API** → http://localhost:5000
- **Frontend** → http://localhost:5173

You're done! Open your browser to http://localhost:5173

## Common Tasks

### Start Only Backend
```bash
npm run dev:backend
```

### Start Only Frontend
```bash
npm run dev:frontend
```

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

## Project Features Ready to Use

### Pages Already Built
- **Home** (`/`) - Homepage with navigation
- **About** (`/about`) - About page with team section
- **Services** (`/services`) - Services listing
- **Portfolio** (`/portfolio`) - Projects gallery
- **Blog** (`/blog`) - Blog posts listing
- **Contact** (`/contact`) - Contact form
- **404** - Not found page

### API Endpoints Ready
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create project (needs auth)
- `POST /api/contact` - Submit contact form
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user

## First Test

### Test Frontend
1. Go to http://localhost:5173
2. You should see the homepage
3. Click navigation links to explore pages

### Test Backend API
```bash
# Get all projects
curl http://localhost:5000/api/projects

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@example.com","subject":"Hello","message":"Test"}'
```

## Add Your Own Content

### Add a New Project to Portfolio

Edit `frontend/src/pages/Portfolio.jsx` and add items to the `projects` array:

```jsx
const projects = [
  {
    title: 'My New Project',
    category: 'Web Design',
    description: 'This is my project',
    image: 'https://example.com/image.jpg',
  },
  // ... more projects
]
```

### Add a New Service

Edit `frontend/src/pages/Services.jsx` and add to `services` array:

```jsx
const services = [
  {
    title: 'My Service',
    description: 'What I offer',
    features: ['Feature 1', 'Feature 2'],
  },
  // ... more services
]
```

### Add a New Page

1. Create `frontend/src/pages/MyPage.jsx`:

```jsx
import React from 'react'
import { Section } from '@/components/section'

export default function MyPage() {
  return (
    <Section>
      <h1>My New Page</h1>
      <p>Content here</p>
    </Section>
  )
}
```

2. Add route in `frontend/src/App.jsx`:

```jsx
import MyPage from './pages/MyPage'

// In Routes section:
<Route path="/mypage" element={<MyPage />} />
```

3. Add link in navbar `frontend/src/components/navbar.jsx`:

```jsx
const navigation = [
  // ... existing items
  { name: "My Page", href: "/mypage" },
]
```

## Project Structure Quick Reference

```
backend/
├── models/        - Database schemas
├── controllers/   - Business logic
├── routes/        - API endpoints
├── middleware/    - Auth, errors
└── server.js      - Express app

frontend/
├── pages/         - Page components
├── components/    - Reusable components
├── config/        - API configuration
└── App.jsx        - Routes
```

## Useful Commands Cheatsheet

```bash
# Development
npm run dev           # Start both frontend + backend
npm run dev:frontend  # Start only frontend
npm run dev:backend   # Start only backend

# Production
npm run build         # Build both
npm start            # Start production server

# Individual workspace commands
npm run dev --workspace=frontend
npm run dev --workspace=backend
```

## Environment Variables Reference

### Backend (`backend/.env`)
```
MONGODB_URI       - MongoDB connection string
JWT_SECRET        - Secret key for JWT tokens
PORT              - Server port (default: 5000)
NODE_ENV          - 'development' or 'production'
```

### Frontend (`frontend/.env`)
```
VITE_API_URL      - Backend API URL (http://localhost:5000)
```

## Debugging Tips

### Backend Issues
```bash
# Check if port is in use
lsof -i :5000

# Check MongoDB connection
mongosh

# View backend logs
npm run dev:backend
```

### Frontend Issues
```bash
# Clear cache and reinstall
rm -rf frontend/node_modules
npm install

# Check Vite is running
npm run dev:frontend
```

### API Connection Issues
1. Is backend running on port 5000?
2. Is `VITE_API_URL` correct in `.env`?
3. Check browser console for CORS errors
4. Network tab in DevTools shows requests/responses

## Next Steps

1. ✅ Get the app running
2. 📝 Customize content in pages
3. 🎨 Update colors in `frontend/src/globals.css`
4. 🗄️ Connect to real MongoDB database
5. 🔐 Setup authentication if needed
6. 📦 Deploy to production!

## Deployment Quick Links

- **Backend** → Heroku, Railway, Render, AWS
- **Frontend** → Vercel, Netlify, GitHub Pages
- **Database** → MongoDB Atlas (free tier available)

## Need Help?

Check these files:
- `README.md` - Full documentation
- `MERN_MIGRATION.md` - What changed
- `backend/.env.example` - Backend config template
- `frontend/.env.example` - Frontend config template

---

**That's it! Your MERN stack app is ready to go.**
