//  MongoDB connection file

const mongoose = require("mongoose"); // this is the library we use to connect to Mango db and intract with it


// this function will connect to the databse and log a message if the connection is succeded
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);// process.env.MONGO_URI this is the connecting String that is stored in the env file
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

/*  what we done in this basically we we call a mangoose library and we create a function called connectDB

-> this function is async function that will try top connect the data base uisng the connect method of mongoose and pass the the connection string that stored in the enve file

-> try catch block is used to catch an errorif the connection is failed and log error*/