const express = require("express");
const app = express();
const {google}  = require('googleapis');
const youtube = google.youtube('v3');

const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const path = require("path");
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")

const { urlencoded, response } = require("express");

//test youtube api token
// console.log(process.env.YOUTUBE_TOKEN)

// connect to DB
connectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// google/youtube request
/* youtube.playlists.list({
  key: process.env.YOUTUBE_TOKEN,
  part: 'snippet',
  channelId: 'UCgYIcvH9oKHCqQNAX81f2kw' 
}).then((response) => {
  console.log(response.data);
}).catch((err) => {
  console.log(err)
})
 */
app.get("/", (req, res) => {
  res.status(201).json({ message: "Hi" });
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));
// app.use('/youtube', require('./routes/youtubeRoutes'));

//Middleware to handle error
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on Server: ${PORT}`));
