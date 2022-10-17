const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.status(201).json({message: 'Hi'})
})

app.listen(PORT, () => console.log(`Server started on Server: ${PORT}`));
