const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TravelSchema = new Schema({
  fromName: {
    type: String,
  },
  toName: {
    type: String,
  },
  departAt: {
    type: String,
  },
  vehicle: {
    type: String,
  }
});

module.exports = Travel = mongoose.model('traveller', TravelSchema);