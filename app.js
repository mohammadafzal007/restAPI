import express from "express";
import dotenv from "dotenv";
import productRoutes from "./Routes/products.js";
import connectDB from "./connectdb/connectdb.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODBURI=process.env.MONGODB_URL;
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1 style="color:Black;font-size:50px;text-decoration:underline;text-align:center;">Hello Welcome to RestApi</h1>
        <p style="color:Gray;font-size:25px;text-align:center;">This is a simple REST API built using Node.js and Express.js,MONGODB Database</p>
        <p style="color:Gray;font-size:25px;text-align:center;">To get started, head over to the <a href="/api/products">products endpoint</a></p>
        `);
})
app.use("/api/products", productRoutes)
const start=async ()=>{
    try {
        
        await connectDB(MONGODBURI,{ connectTimeoutMS: 20000 });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    
    }
    catch (error) {
        console.log("Error :", error)
    }
}


start();