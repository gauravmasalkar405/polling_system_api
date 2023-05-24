// importing packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use(routes);

// server
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, (req, res) => {
  console.log(`Server is running successfully on port ${PORT}`);
});

// database connection
mongoose
  .connect(
    "mongodb+srv://gauravmasalkar405:hIIQeOXIWqptFveq@cluster0.29crc9i.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database is connected successfully"))
  .catch((error) => {
    console.log(error);
  });
