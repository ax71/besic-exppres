import {
  createorderService,
  getOrdersService,
} from "../services/order.service.js";
import { getProductById } from "../services/product.service.js";

export const createOrderController = (req, res) => {
  const { items } = req.body;

  const orderItems = items.map((item) => {
    const product = getProductById(item.productId);

    if (!product) {
      throw new Error("Product not found");
    }

    return {
      productId: product.id,
      price: product.price,
      quantity: item.quantity,
    };
  });

  const newOrder = createorderService(orderItems);
  res.status(201).json(newOrder);
};

export const getOrdersController = (req, res) => {
  const orders = getOrdersService();
  res.json(orders);
};
