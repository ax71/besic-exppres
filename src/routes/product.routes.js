import express from "express";
import {
  createProductController,
  getProductByIdController,
  getProductController,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/products", getProductController);
router.get("/products/:id", getProductByIdController);
router.post("/products", createProductController);

export default router;
