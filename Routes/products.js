import express from "express";
import {getProducts,getProductsTesting} from "../controllers/products.js"
const router=express.Router();

router.get("/",getProducts);
router.get("/testing",getProductsTesting);

export default router;
