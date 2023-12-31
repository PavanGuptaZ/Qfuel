import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config()


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATEBASE_URL)
    } catch (err) {
        console.log(err)
    }
}
export default connectDb