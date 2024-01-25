import mongoose from "mongoose"

const {Schema} = mongoose


const productSchema = new Schema({
    image: String,
    name: String,
    info: String,
    price: Number
})

export const featuredModel = mongoose.model("finalimtahan", productSchema)