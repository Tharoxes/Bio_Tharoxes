const mongoose = require("mongoose");

const mongo_user = process.env.MONGO_USER
const mongo_password = process.env.MONGO_PASSWORD

const CONNECTION_URL = `mongodb+srv://${mongo_user}:${mongo_password}@cluster0.ofi1wkl.mongodb.net/?retryWrites=true&w=majority`

const local_TestDB = "mongodb://127.0.0.1:27017/test"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('got DB connected');
  } catch (error) {
    console.log("Connection failed.");
  }
};

module.exports = connectDB