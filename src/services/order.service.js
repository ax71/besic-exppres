import { Order } from "../models/order.model.js";

export const createOrderService = async (data) => {
  console.log(data.items);

  const subTotal = data.items.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const order = await Order.create({
    ...data,
    subTotal,
  });

  return order;
};
