
import mongoose from 'mongoose';

const url = process.env.MongoUrl;

const mongourl = url.toString();
const connectDB = async () => {
  try {
    await mongoose.connect(mongourl,
      {URLSearchParams:true}
      );
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
   
    process.exit(1);
  }
};

export default connectDB;
