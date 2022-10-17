const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongoose://localhost:27017/bio_db", {
      useNewUrlParser: true,
    });
  } catch (error) {
    console.log("Connection failed.");
  }
};

module.exports = connectDB