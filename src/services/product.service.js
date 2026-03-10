import { Product } from "../models/product.model.js";

export const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

export const getAllProductsService = async () => {
  const products = await Product.find();
  return products;
};

export const updateProductService = async (id, data) => {
  const product = await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return product;
};

export const deleteProductService = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};
