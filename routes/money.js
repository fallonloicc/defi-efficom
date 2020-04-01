var express = require('express');
var router = express.Router();
var moneyController = require('../controllers/money');

router.get('/:userId/', function (req, res, next) {
    moneyController.getUserMoney(req, res);
});

module.exports = router;
