var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');

/* GET users listing. */
router
    //Get all user
    .get('/', function(req, res, next) {
      userController.getAll(req, res);
})
    //Get one user by Id
    .get('/:userId/', function (req, res, next) {
      userController.getUserById(req, res);
})
    //Create new User
    .post('/', function (req, res, next) {
      userController.newUser(req, res);
    })
    .post('/login/', function (req, res, next) {
        userController.login(req, res)
    })
    //Change password by userid
    .post('/:userId/', function (req, res, next) {
        userController.changePassword(req, res);
    })
    //Delete user by id
    .delete('/:userId/', function (req, res, next) {
       userController.deleteUser(req, res);
    });

module.exports = router;
