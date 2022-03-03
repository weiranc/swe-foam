const mongoose = require('mongoose');
const db = require('./index');
mongoose.Promise = global.Promise;

const reactorSchema = new mongoose.Schema({
  url: String,
  lastModified: String,
  isFoaming: Boolean,
});

const Reactor = mongoose.model('Reactor', reactorSchema);

module.exports = Reactor;
