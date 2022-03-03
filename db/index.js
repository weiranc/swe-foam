const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/foam';

const db = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
