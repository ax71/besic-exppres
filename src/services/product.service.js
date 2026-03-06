import {
  findProductById,
  getAllProducts,
  product,
} from "../models/product.model.js";

export const getProduct = () => {
  const products = getAllProducts();
  return products;
};

export const getProductById = (id) => {
  const product = findProductById(id);

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

export const createProductService = (name, price) => {
  const newProduct = {
    id: product.length + 1,
    name,
    price,
  };

  product.push(newProduct);

  return newProduct;
};
