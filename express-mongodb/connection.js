const mongoose = require("mongoose");

const username = "ijass";
const password = "GsfcYIaFURZB16io";
const db = "OA_MERN_20MAR2023_3:00-5:00";

module.exports.connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://${username}:${password}@ocean-class.mscbll9.mongodb.net/${db}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    // process.exit(1);
  }
};
