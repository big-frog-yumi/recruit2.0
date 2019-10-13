var express = require('express');
var router = express.Router();
var Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// POST /login
// @desc 返回token jwt passport
router.post('/login', (req, res) => {
  var account = req.body.account;
  var password = req.body.password;
  //查询数据库
  Users.findOne({
      account
    })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          account: '用户不存在!'
        })
      }

      //密码匹配
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            var rule = {

            }
            res.json({
              msg: 'success'
            });
          } else {
            return res.status(400).json({
              password: "密码错误!"
            });
          }
        })
    })
})

module.exports = router;
