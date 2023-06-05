const express = require("express");
// set up database
const db = require("./config/mongoose");
const dotenv = require("dotenv");
// const port = 8000;
dotenv.config();

const port = process.env.port;

const app = express();

const expressLayouts = require("express-ejs-layouts");
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// use express router
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is up and running with homosapian as admin`);
});
