import { createOrderService } from "../services/order.service.js";

export const createOrderController = async (req, res) => {
  try {
    const order = await createOrderService(req.body);
    res.status(201).json({
      message: "Order created successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
