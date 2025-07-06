import mongoose from 'mongoose';


const connectDB = async () =>{
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Mongodb connection failed",error);
        
    }
}

export default connectDB;
