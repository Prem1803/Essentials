const express = require("express");
require("dotenv").config();
require("./db/mongoose");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`HTTP Server is running on port ${port}`);
});
module.exports = app;
