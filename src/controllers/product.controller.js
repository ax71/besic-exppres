import {
  createProductService,
  getProduct,
  getProductById,
} from "../services/product.service.js";

export const getProductController = (req, res) => {
  const products = getProduct();
  res.json(products);
};

export const getProductByIdController = (req, res) => {
  const id = Number(req.params.id);
  try {
    const product = getProductById(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProductController = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        message: "Name and price are required",
      });
    }

    const newProduct = await createProductService(name, price);

    res.status(201).json({
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
