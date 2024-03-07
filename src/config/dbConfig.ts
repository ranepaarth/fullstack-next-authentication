import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    const connection = mongoose.connection;

    connection.on('connection', () => {
        console.log("DB connected successfully");
      });

      connection.on('error',(err)=>{
        console.log('Mongodb connection error. Please make sure MongoDB is running' + err)
        process.exit(1)
      })
  } catch (error) {
    console.log('Something went wrong')
    console.log(error);
  }
};
