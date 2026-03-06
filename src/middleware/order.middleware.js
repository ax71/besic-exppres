export const validateOrderMiddleware = (req, res, next) => {
  const { items } = req.body;
  if (!items || items.length === 0) {
    return res.status(400).json({
      message: "Items are required",
    });
  }

  for (const item of items) {
    if (!item.productId || item.quantity <= 0) {
      return res.status(400).json({
        message: "Invalid quantity or product id",
      });
    }
  }
  next();
};
