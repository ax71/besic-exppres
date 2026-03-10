import express from "express";
import {
  createOrderController,
  deleteOrderController,
  getAllOrdersController,
  updateOrderStatusController,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/orders", createOrderController);
router.get("/orders", getAllOrdersController);
router.patch("/orders/:id/status", updateOrderStatusController);
router.delete("/orders/:id", deleteOrderController);

export default router;
