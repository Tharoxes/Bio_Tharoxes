const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
    })
    console.log('got DB connected');
  } catch (error) {
    console.log("Connection failed.");
  }
};

module.exports = connectDB