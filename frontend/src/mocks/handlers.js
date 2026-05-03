import { http, HttpResponse } from 'msw'

const API_URL = 'http://localhost:5000'

// Mock data
const mockProjects = [
  {
    _id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300',
    link: 'https://example.com/ecommerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    createdAt: new Date('2024-01-15')
  },
  {
    _id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300',
    link: 'https://example.com/tasks',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    createdAt: new Date('2024-02-10')
  },
  {
    _id: '3',
    title: 'Portfolio Website',
    description: 'Modern portfolio website showcasing design and development work',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300',
    link: 'https://example.com/portfolio',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    createdAt: new Date('2024-03-05')
  },
  {
    _id: '4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=300',
    link: 'https://example.com/dashboard',
    technologies: ['React', 'Chart.js', 'Express', 'MongoDB'],
    createdAt: new Date('2024-01-20')
  },
  {
    _id: '5',
    title: 'Blog Platform',
    description: 'Headless CMS platform for creating and managing blog content',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300',
    link: 'https://example.com/blog',
    technologies: ['Next.js', 'Sanity', 'Tailwind CSS'],
    createdAt: new Date('2024-02-28')
  },
  {
    _id: '6',
    title: 'Weather App',
    description: 'Real-time weather application with geolocation and forecasts',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300',
    link: 'https://example.com/weather',
    technologies: ['React', 'OpenWeather API', 'Vite'],
    createdAt: new Date('2024-03-15')
  }
]

const mockBlogPosts = [
  {
    _id: '1',
    title: 'Getting Started with React Hooks',
    slug: 'react-hooks-guide',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in functional components.',
    content: 'React Hooks have revolutionized the way we write React components...',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=800',
    author: 'John Developer',
    createdAt: new Date('2024-03-10'),
    readTime: 5
  },
  {
    _id: '2',
    title: 'MongoDB Best Practices',
    slug: 'mongodb-best-practices',
    excerpt: 'Essential tips and tricks for optimizing your MongoDB databases.',
    content: 'MongoDB is a powerful NoSQL database...',
    category: 'Database',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70504c8a?w=800',
    author: 'Jane Backend',
    createdAt: new Date('2024-03-05'),
    readTime: 8
  },
  {
    _id: '3',
    title: 'CSS Grid vs Flexbox',
    slug: 'css-grid-vs-flexbox',
    excerpt: 'Understand the differences and when to use CSS Grid or Flexbox.',
    content: 'Both CSS Grid and Flexbox are powerful layout tools...',
    category: 'CSS',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6cb?w=800',
    author: 'Alex Designer',
    createdAt: new Date('2024-02-28'),
    readTime: 6
  },
  {
    _id: '4',
    title: 'Web Performance Optimization',
    slug: 'web-performance',
    excerpt: 'Tips to improve your website performance and user experience.',
    content: 'Website performance is crucial for user experience...',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800',
    author: 'Chris Performance',
    createdAt: new Date('2024-02-20'),
    readTime: 10
  },
  {
    _id: '5',
    title: 'REST API Design Principles',
    slug: 'rest-api-design',
    excerpt: 'Learn how to design RESTful APIs that are easy to use and maintain.',
    content: 'A well-designed REST API is key to successful web development...',
    category: 'Backend',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
    author: 'Bob API',
    createdAt: new Date('2024-02-15'),
    readTime: 7
  }
]

let mockUser = null
let mockContacts = []

export const handlers = [
  // Auth endpoints
  http.post(`${API_URL}/api/auth/register`, async ({ request }) => {
    const body = await request.json()
    const newUser = {
      _id: Math.random().toString(36).substr(2, 9),
      name: body.name,
      email: body.email,
      createdAt: new Date()
    }
    mockUser = newUser
    return HttpResponse.json({ user: newUser, token: 'mock-jwt-token' }, { status: 201 })
  }),

  http.post(`${API_URL}/api/auth/login`, async ({ request }) => {
    const body = await request.json()
    const user = {
      _id: Math.random().toString(36).substr(2, 9),
      name: 'Developer',
      email: body.email,
      createdAt: new Date()
    }
    mockUser = user
    return HttpResponse.json({ user, token: 'mock-jwt-token' })
  }),

  http.get(`${API_URL}/api/auth/me`, () => {
    if (mockUser) {
      return HttpResponse.json({ user: mockUser })
    }
    return HttpResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }),

  http.post(`${API_URL}/api/auth/logout`, () => {
    mockUser = null
    return HttpResponse.json({ message: 'Logged out successfully' })
  }),

  // Projects endpoints
  http.get(`${API_URL}/api/projects`, () => {
    return HttpResponse.json(mockProjects)
  }),

  http.get(`${API_URL}/api/projects/:id`, ({ params }) => {
    const project = mockProjects.find(p => p._id === params.id)
    if (project) {
      return HttpResponse.json(project)
    }
    return HttpResponse.json({ error: 'Project not found' }, { status: 404 })
  }),

  http.post(`${API_URL}/api/projects`, async ({ request }) => {
    const body = await request.json()
    const newProject = {
      _id: Math.random().toString(36).substr(2, 9),
      ...body,
      createdAt: new Date()
    }
    mockProjects.push(newProject)
    return HttpResponse.json(newProject, { status: 201 })
  }),

  http.put(`${API_URL}/api/projects/:id`, async ({ params, request }) => {
    const body = await request.json()
    const projectIndex = mockProjects.findIndex(p => p._id === params.id)
    if (projectIndex !== -1) {
      mockProjects[projectIndex] = { ...mockProjects[projectIndex], ...body }
      return HttpResponse.json(mockProjects[projectIndex])
    }
    return HttpResponse.json({ error: 'Project not found' }, { status: 404 })
  }),

  http.delete(`${API_URL}/api/projects/:id`, ({ params }) => {
    const projectIndex = mockProjects.findIndex(p => p._id === params.id)
    if (projectIndex !== -1) {
      const deleted = mockProjects.splice(projectIndex, 1)[0]
      return HttpResponse.json({ message: 'Project deleted', project: deleted })
    }
    return HttpResponse.json({ error: 'Project not found' }, { status: 404 })
  }),

  // Blog endpoints
  http.get(`${API_URL}/api/blog`, () => {
    return HttpResponse.json(mockBlogPosts)
  }),

  http.get(`${API_URL}/api/blog/:id`, ({ params }) => {
    const post = mockBlogPosts.find(p => p._id === params.id)
    if (post) {
      return HttpResponse.json(post)
    }
    return HttpResponse.json({ error: 'Blog post not found' }, { status: 404 })
  }),

  // Contact endpoint
  http.post(`${API_URL}/api/contact`, async ({ request }) => {
    const body = await request.json()
    const newContact = {
      _id: Math.random().toString(36).substr(2, 9),
      ...body,
      createdAt: new Date()
    }
    mockContacts.push(newContact)
    return HttpResponse.json({ message: 'Message sent successfully', contact: newContact }, { status: 201 })
  }),

  // Services endpoint
  http.get(`${API_URL}/api/services`, () => {
    const services = [
      {
        _id: '1',
        title: 'Web Development',
        description: 'Full-stack web development services using modern technologies',
        icon: '🚀',
        features: ['React', 'Node.js', 'MongoDB', 'Responsive Design']
      },
      {
        _id: '2',
        title: 'UI/UX Design',
        description: 'Beautiful and intuitive user interface designs',
        icon: '🎨',
        features: ['Figma', 'Prototyping', 'User Research', 'Design Systems']
      },
      {
        _id: '3',
        title: 'Mobile Development',
        description: 'Cross-platform mobile app development',
        icon: '📱',
        features: ['React Native', 'Flutter', 'iOS', 'Android']
      },
      {
        _id: '4',
        title: 'Consulting',
        description: 'Technical consulting and architecture planning',
        icon: '💡',
        features: ['Technical Strategy', 'Code Review', 'Team Training', 'Performance']
      }
    ]
    return HttpResponse.json(services)
  })
]
