const mongoose = require('mongoose');
const db = require('./default.json');

const connectDB = async () => {
  try {
    await mongoose.connect(db.mongoURI, { 
      useNewUrlParser: true, 
      useCreateIndex: true,
      useFindAndModify: false
    });

    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);

    // Exit process failture
    process.exit(1);
  }
}

module.exports = connectDB;