const express = require("express");
const path = require("path");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;
const AuthRouter = require("./routers/AuthRoutes");
const UserRouter = require("./routers/UserRoutes");
const CategoryRouter = require("./routers/CategoryRoutes");
const OrderRouter = require("./routers/OrderRoutes");
const ProductRouter = require("./routers/ProductRoutes");
const FileRouter = require("./routers/FileRoutes");

app.use(AuthRouter);
app.use(UserRouter);
app.use(CategoryRouter);
app.use(OrderRouter);
app.use(ProductRouter);
app.use(FileRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/../frontend/build")));

  app.use(AuthRouter);
  app.use(UserRouter);
  app.use(CategoryRouter);
  app.use(OrderRouter);
  app.use(ProductRouter);
  app.use(FileRouter);

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/../frontend/build/index.html"));
  });
}
app.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
module.exports = app;
