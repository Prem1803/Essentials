const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.zzab0.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const storage = new GridFsStorage({
  url: url,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: "media",
      filename: `${file.originalname}-${new Date().getTime()}`,
    };
  },
});

module.exports = multer({ storage });
