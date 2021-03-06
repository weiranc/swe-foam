const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.route('/reactor').get(controller.getAll);

router.route('/reactor/:isFoaming').get(controller.getAllByFilter);

router.route('/reactor/:id').put(controller.updateFoamingStatus);

module.exports = router;
