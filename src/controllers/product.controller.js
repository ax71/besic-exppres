import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  updateProductService,
} from "../services/product.service.js";

export const createProductController = async (req, res) => {
  try {
    const product = await createProductService(req.body);
    res.status(201).json({
      message: "Product created successfully",
      date: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json({
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await updateProductService(id, req.body);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await deleteProductService(id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
