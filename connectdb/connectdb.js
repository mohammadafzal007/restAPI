import mongoose from "mongoose";

const connectDB=(MONGODBURI)=>{
try {
    mongoose.connect(MONGODBURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected")
} catch (error) {
    console.log("Error :",error)
}
}

export default connectDB;
