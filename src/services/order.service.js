import { orders } from "../models/order.model.js";

export const createorderService = (items) => {
  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const newOrder = {
    id: orders.length + 1,
    items,
    subtotal,
    createdAt: new Date(),
    status: "pending",
  };

  orders.push(newOrder);

  return newOrder;
};

export const getOrdersService = () => {
  return orders;
};
