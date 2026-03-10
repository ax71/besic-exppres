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

export const getAllOrdersService = async (page, limit) => {
  if (!limit || !page) {
    return await Order.find().populate("items.product", "name price category");
  }

  const skip = (page - 1) * limit;

  const orders = await Order.find()
    .populate("items.product", "name price category")
    .skip(skip)
    .limit(parseInt(limit));

  return orders;
};

export const updateOrderService = async (id, data) => {
  const order = await Order.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
  return order;
};

export const deleteOrderService = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  return order;
};
