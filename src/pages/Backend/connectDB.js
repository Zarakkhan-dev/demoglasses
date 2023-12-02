
import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl,
      {
        // Other MongoDB connection options can be added here if needed
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
      );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
   
    process.exit(1);
  }
};

export default connectDB;
