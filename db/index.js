const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost/reactors';

const db = mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = db;
