const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ankit:ankit1234@cluster0.mpr5ymw.mongodb.net/");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Database is successfully connected");
});

module.export = db;
