const express = require("express");
const mongoose = require("mongoose");
const FileRoutes = new express.Router();

let gfs;

const conn = mongoose.connection;
conn.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: "media" });
});
FileRoutes.get("/media/:filename", async (req, res) => {
  try {
    console.log(req.params.filename);
    const file = await gfs
      .find({ filename: req.params.filename })
      .toArray((err, files) => {
        if (files.length === 0 || !files[0]) {
          return res.status(200).send({ message: "No File Found" });
        }
        gfs.openDownloadStreamByName(req.params.filename).pipe(res);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: error.message });
  }
});

module.exports = FileRoutes;
