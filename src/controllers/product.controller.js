import { createProductService } from "../services/product.service.js";

export const createProduct = async (req, res) => {
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
