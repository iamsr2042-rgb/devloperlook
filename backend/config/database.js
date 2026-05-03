import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/devloperlook';
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('[v0] MongoDB connected successfully');
  } catch (error) {
    console.error('[v0] MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default mongoose;
