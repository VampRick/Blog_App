import mongoose from "mongoose"


export const ConnectDB=async()=>{
    await mongoose.connect("mongodb+srv://soumabho:ghosh9876@cluster0.lad8z.mongodb.net/blog-app")
}