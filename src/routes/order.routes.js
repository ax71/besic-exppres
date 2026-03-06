import express from "express";
import {
  createOrderController,
  getOrdersController,
} from "../controllers/order.controller.js";
import { validateOrderMiddleware } from "../middleware/order.middleware.js";

const router = express.Router();

router.post("/orders", validateOrderMiddleware, createOrderController);
router.get("/orders", getOrdersController);

export default router;
