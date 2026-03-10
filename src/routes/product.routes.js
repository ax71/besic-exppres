import express from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  updateProductController,
} from "../controllers/product.controller.js";

const router = express.Router();

router.post("/products", createProductController);
router.get("/products", getAllProductsController);
router.put("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

export default router;
