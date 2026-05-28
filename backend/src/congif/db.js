import mongoose from "mongoose";



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('Database connection successfull')
    } catch(err) {
        console.log("Database connection error ", err.message)
    }
}

export default connectDB;