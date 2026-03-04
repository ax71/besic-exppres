const express = require("express");
const app = express();
const port = 3000;
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/users", userRoute);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
