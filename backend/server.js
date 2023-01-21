const express = require("express");
const app = express();
const {google}  = require('googleapis');
const youtube = google.youtube('v3');

const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
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

app.set('port', process.env.PORT || 8080);

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

//Routes
app.use("/api/users", require("./routes/userRoutes"));
// app.use('/youtube', require('./routes/youtubeRoutes'));

// serve frontend
if(process.env.NODE_ENV == 'production'){
  // set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
}else{
  app.get("/", (req, res) => {
    res.status(200).json({message:'App failed to run!'});
  });
}

//Middleware to handle error
app.use(errorHandler);

app.listen(app.get('port'), () => console.log(`Server started on Server: ${PORT}`));
