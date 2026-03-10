import {
  createOrderService,
  deleteOrderService,
  getAllOrdersService,
  updateOrderService,
} from "../services/order.service.js";

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

export const getAllOrdersController = async (req, res) => {
  try {
    const { page, limit } = req.query;

    const orders = await getAllOrdersService(page, limit);
    res.status(200).json({
      message: "Orders fetched successfully",
      data: orders,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateOrderStatusController = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await updateOrderService(id, { status }, { new: true });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteOrderController = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await deleteOrderService(id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
