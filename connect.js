const mongoose = require('mongoose');

const connectToMongoDB = async (url) => {
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Error connecting to MongoDB", err);
  }
};

module.exports = { connectToMongoDB };
