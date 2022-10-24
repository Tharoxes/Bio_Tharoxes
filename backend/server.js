const express = require("express");
const app = express();

const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")

const { urlencoded } = require("express");

// connect to DB
connectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.status(201).json({ message: "Hi" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

//Middleware to handle error
app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on Server: ${PORT}`));
