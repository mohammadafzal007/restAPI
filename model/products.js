import mongoose from "mongoose";

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: [true, "price must be provided"]
        },
        featured: {
            type: Boolean,
            default: false
        },
        rating: {
            type: Number,
            dafault: 4.9
        },
        createdAt: {
            type: Date,
            default: Date.now()
        },
        company: {
            type: String,
            enum: {
                values: ["dell", "samsung", "mi", "apple"]
            }
        }
    }
)

const productModel=mongoose.model('Product',productSchema);

export default productModel;