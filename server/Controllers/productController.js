import { featuredModel } from "../Models/productSchema.js";

export const GetAllProducts = async (req, res) => {
  try {
    const data = await featuredModel.find({});
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

export const GetAllProductsByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await featuredModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};

export const PostProduct = async (req, res) => {
  try {
    const newProduct = new featuredModel({ ...req.body });
    await newProduct.save();
    res.status(200).json("added!");
  } catch (error) {
    res.status(500).json("error!");
  }
};

export const DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await featuredModel.findByIdAndDelete(id);
    res.status(200).json("deleted!");
  } catch (error) {
    res.status(500).json("error!");
  }
};
