const mongoose = require("mongoose");

const connectDB = async (server) => {
  try {
    await mongoose.connect(server);
    console.log("Connection success");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
