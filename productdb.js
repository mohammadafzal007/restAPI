import dotenv from "dotenv";
import productModel from "./model/products.js";
import productJson from "./products.json"  assert { type: "json" };
import connectDB from "./connectdb/connectdb.js";
dotenv.config();
const MONGODB_URL=process.env.MONGODB_URL;

const start=async ()=>{

  try {
    await connectDB(MONGODB_URL);
    await productModel.deleteMany();
    await productModel.create(productJson);
    console.log("Success")
  } catch (error) {
    console.log("Error : ",error.message);
  } 
 
}

start();

