var express = require('express');
var router = express.Router();
var skillController = require('../controllers/skill');

router
    .get('/:userId/', function (req, res, next) {
        skillController.getUserSkill(req, res);
    })
    .update('/:userId/', function (req, res, next) {
        skillController.updateSkill(req, res);
    });

module.exports = router;
