var express = require('express');
var user = require('../model/user');
var con = require('../db');

exports.getAll = function (req, res) {
    con.query("SELECT * FROM user", function (err, result, field) {
        if (err) throw err;
        res.json(result);
    })
};

exports.getUserById = function (req, res) {
    const id = req.params.userId;
    con.query("SELECT * FROM user WHERE id ='"+ id +"'", function (err, result, field) {
        if (err) throw err;
        res.json(result);
    })
};

exports.newUser = function (req, res) {
    const tmp_user = new user(req.body);
    con.query("SELECT * FROM user WHERE mail ='"+ tmp_user.mail +"'", function (err, result, field) {
        if (err) throw err;
        else if (result.length === 0){
            con.query("INSERT INTO user (name, firstname, pseudo, mail, phone, id_pole_emploi,password) " +
                "VALUES ('"+ tmp_user.name +"', '"+ tmp_user.firstname +"', '"+ tmp_user.pseudo +"', '"+ tmp_user.mail +"'," +
                "'"+ tmp_user.phone +"', '"+ tmp_user.id_PE +"', '"+ tmp_user.password +"')", function (err, result, field) {
                if (err) throw err;
                res.sendStatus(200);
            })
        }
        else{
            res.sendStatus(409);
        }
    })
};

exports.login = function (req, res){
  const mail = req.body.mail;
  const passwd = req.body.password;

  con.query("SELECT * FROM user WHERE mail = '"+ mail +"'", function (err, result, field) {
      if (result[0].password === passwd){
          res.json(result);
      }
  })
};

exports.changePassword = function (req, res) {
    const userId = req.params.userId;
    const newPassword = req.body.password;

    con.query("UPDATE user SET password = '"+ newPassword +"' WHERE id = '"+ userId +"'", function (err, result, field) {
        if (err) throw err;
        res.sendStatus(200);
    })
};

exports.deleteUser = function (req, res) {
    const userId = req.params.userId;

    con.query("DELETE FROM user WHERE id = '"+ userId +"';", function (err, result, field) {
        if (err) throw err;
        res.sendStatus(200)
    })
};
