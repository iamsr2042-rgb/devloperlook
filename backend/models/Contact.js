import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      minlength: 10,
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
    replied: {
      type: Boolean,
      default: false,
    },
    replyMessage: String,
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
