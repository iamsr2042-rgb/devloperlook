import express from 'express';
import {
  createContact,
  getContacts,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', createContact);
router.get('/', verifyToken, isAdmin, getContacts);
router.put('/:id', verifyToken, isAdmin, updateContactStatus);
router.delete('/:id', verifyToken, isAdmin, deleteContact);

export default router;
