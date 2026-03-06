import express from "express";
import productRoutes from "./routes/product.routes.js";
import orderRoutes from "./routes/order.routes.js";

const app = express();

app.use(express.json());

app.use("/api", productRoutes);
app.use("/api", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is running to the moon 🚀");
});

export default app;
