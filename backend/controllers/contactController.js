import Contact from '../models/Contact.js';

export const createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      contact,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getContacts = async (req, res) => {
  try {
    // Only admin can view all contacts
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { status, replyMessage } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        status,
        replyMessage,
        replied: !!replyMessage,
      },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ success: true, contact });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ success: true, message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
