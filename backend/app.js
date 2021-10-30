const express = require("express");
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
const FileRouter = require("./routers/FileRoutes");

app.use(AuthRouter);
app.use(UserRouter);
app.use(CategoryRouter);
app.use(FileRouter);

app.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
module.exports = app;
