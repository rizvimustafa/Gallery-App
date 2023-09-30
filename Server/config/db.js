import mongoose from "mongoose";

const mongoConnection = async() =>{
    const res = await mongoose.connect("mongodb://127.0.0.1:27017/gallery-app")
if(res)
{
    console.log("Connected Succresf")
}
};

export default mongoConnection;