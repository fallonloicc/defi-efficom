var express = require('express');
var router = express.Router();
var coursController = require('../controllers/cours');

router
    //Get all courses
    .get('/', function (req, res, next) {
       coursController.getAll(req, res);
    })
    //Get course by id
    .get('/:courseId/', function (req, res, next) {
        coursController.getCourseById(req, res);
    })
    //Send new course
    .post('/', function (req, res, next) {
        coursController.createCourse(req, res)
    })
    .delete('/:courseId', function (req, res, next) {
        coursController.deleteCourse(req, res)
    });

module.exports = router;
