const mongoose = require('mongoose');
const Reactor = require('../db/Reactor');

const controller = {
  getAll: function (req, res) {
    Reactor.find({})
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getAllByFilter: function (req, res) {
    Reactor.find({ isFoaming: req.params.isFoaming })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  updateFoamingStatus: function (req, res) {
    Reactor.findOneAndUpdate(
      { _id: req.params.id },
      { isFoaming: req.body.status }
    )
      .then((response) => {
        res.status(204).send(response);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

module.exports = controller;
