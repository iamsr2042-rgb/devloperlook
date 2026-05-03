# Mock API Documentation

This frontend uses **Mock Service Worker (MSW)** to intercept API calls and return mock data. This allows the entire application to work without needing the backend server running.

## How It Works

- MSW intercepts all HTTP requests made to `http://localhost:5000/api/*`
- Instead of sending requests to a real backend, it returns mock data instantly
- The intercepted requests are defined in `/src/mocks/handlers.js`
- MSW is initialized in `/src/main.jsx` and starts listening for requests

## Features

No Backend Required
- The entire application works standalone
- Perfect for development and testing the frontend
- No need to start the Express server

Realistic API Responses
- Mock data matches the actual backend API structure
- Includes realistic project, blog post, and user data
- All CRUD operations are simulated

## Mock API Endpoints

### Authentication
```
POST /api/auth/register     - Register a new user
POST /api/auth/login        - Login (returns JWT token)
GET  /api/auth/me           - Get current user
POST /api/auth/logout       - Logout
```

### Projects
```
GET  /api/projects          - Get all projects
GET  /api/projects/:id      - Get single project
POST /api/projects          - Create new project
PUT  /api/projects/:id      - Update project
DELETE /api/projects/:id    - Delete project
```

### Blog
```
GET  /api/blog              - Get all blog posts
GET  /api/blog/:id          - Get single post
```

### Contact
```
POST /api/contact           - Submit contact form
```

### Services
```
GET  /api/services          - Get all services
```

## Mock Data

The following data is pre-populated and available:

### Projects (6 items)
- E-Commerce Platform
- Task Management App
- Portfolio Website
- Social Media Dashboard
- Blog Platform
- Weather App

### Blog Posts (5 items)
- Getting Started with React Hooks
- MongoDB Best Practices
- CSS Grid vs Flexbox
- Web Performance Optimization
- REST API Design Principles

### Services (4 items)
- Web Development
- UI/UX Design
- Mobile Development
- Consulting

## Switching to Real Backend

When you're ready to use the real backend:

1. Stop the dev server (Ctrl+C)
2. Start the backend server:
   ```bash
   cd backend
   npm install
   npm run dev
   ```
3. The frontend will automatically use the real API since MSW only intercepts when the backend is unavailable

## How MSW Works

1. **Request Interceptor** - MSW intercepts all outgoing HTTP requests
2. **Handler Matching** - Finds a matching handler in `/src/mocks/handlers.js`
3. **Mock Response** - Returns the mocked data or error
4. **Transparent** - To your app, it looks like a real API response

## Adding More Mock Data

Edit `/src/mocks/handlers.js` to add or modify:

1. **Add new mock data**
   ```javascript
   const mockNewData = [
     { _id: '1', title: 'Example', ... }
   ]
   ```

2. **Add new handler**
   ```javascript
   http.get(`${API_URL}/api/new-endpoint`, () => {
     return HttpResponse.json(mockNewData)
   })
   ```

3. **Export in handlers array**
   ```javascript
   export const handlers = [
     // ... existing handlers
     http.get(`${API_URL}/api/new-endpoint`, ...) // Add here
   ]
   ```

## Debugging MSW

MSW logs to the browser console. Look for:
- `[MSW] Mocking enabled`
- `[MSW] GET http://localhost:5000/api/...`

To see more detailed logs, check the Network tab in DevTools - you'll see "mocked" in the Type column.

## Common Issues

**API calls not working?**
- Check that MSW initialized properly in main.jsx
- Look for MSW messages in the browser console
- Verify the endpoint exists in handlers.js

**Want to switch to real backend?**
- Start the Express backend server
- MSW will bypass requests to a running real server

**Need to add more mock data?**
- Edit the mock data objects in handlers.js
- Add new handlers for new endpoints
- Restart the dev server
