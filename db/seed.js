const Reactor = require('./Reactor');
const mongoose = require('mongoose');
const data = require('../foam-seed.json');

const save = () => {
  Reactor.insertMany(data)
    .then((docs) => {
      console.log('Data inserted!');
    })
    .catch((err) => {
      console.error(err);
    });
};

save();
