
import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl,
    
      );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
   
    process.exit(1);
  }
};

export default connectDB;
