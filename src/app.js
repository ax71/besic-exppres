const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/users", userRoute);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal server error" });
});

app.get("/", (req, res) => {
  res.send("API is running to the moon 🚀");
});

module.exports = app;
