import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const { category, featured } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (featured === 'true') filter.featured = true;

    const projects = await Project.find(filter)
      .populate('author', 'name email avatar')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    ).populate('author', 'name email avatar');

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json({ success: true, project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, description, category, technologies, liveUrl, githubUrl } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const project = await Project.create({
      title,
      description,
      category,
      technologies: technologies || [],
      liveUrl,
      githubUrl,
      author: req.user.id,
    });

    res.status(201).json({
      success: true,
      project,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateProject = async (req, res) => {
  try {
    let project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    // Check if user is the project author
    if (project.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to update this project' });
    }

    project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.json({ success: true, project });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    if (project.author.toString() !== req.user.id) {
      return res.status(403).json({ error: 'Not authorized to delete this project' });
    }

    await Project.findByIdAndDelete(req.params.id);

    res.json({ success: true, message: 'Project deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
