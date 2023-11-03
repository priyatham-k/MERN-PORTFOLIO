const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://priyatham7k:Krishna_143@cluster0.5frh4sn.mongodb.net/Personal"; // Standard MongoDB deployment

mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
