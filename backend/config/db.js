const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDb conectado!");
  } catch (error) {
    console.error(`Erro ao conectar ao banco: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
