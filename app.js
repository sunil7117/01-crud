// import files and important modules
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const { join } = require("path");
const home = require("./routes/homeRoute");
const student = require("./routes/StudentRoute");
const connectDB = require("./db/connection");
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/studentRecorddb";

// Set a view engine named 'EJS'
app.set("view engine", "ejs");

// Access bootstrap and static files
app.use("/student", express.static(join(process.cwd(), "node_modules")));
app.use("/student/edit", express.static(join(process.cwd(), "node_modules")));

// Connect to mongoDB
connectDB(DATABASE_URL);

// use middleware for get data from form when post data
app.use(express.urlencoded({ extended: true }));

// Set routes for access all incoming response
app.use(home);
app.use(student);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
