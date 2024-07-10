const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://abhinavmidha0824:j89pjRGEf4Waxyav@cluster0.7sozyvy.mongodb.net/",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB Connection Successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB Connection Error");
  });
}

connectDB();

module.exports = mongoose;
