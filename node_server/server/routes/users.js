const express = require('express');
const router = express.Router();
var nodemailer = require("nodemailer");
// 加载body-parser 处理post提交过来的数据
var bodyParser = require('body-parser');

var User = require('../models/User');

router.get('/test', (req, res) => {
  res.json({msg:'users works.'})
})

//@router POST users/email
//@desc 发送邮件
//@access public
router.post('/email', function (req, res) {
  var text = `${req.body.name } 同学已成功报名，报名方向为 ${req.body.direct},联系方式是 ${req.body.email}！`;

  var transporter = nodemailer.createTransport({
    host: 'smtp.qq.com',
    service: 'qq',
    secureConnection: true,
    port: 465,
    auth: {
      user: "1966919376@qq.com",
      pass: //这是授权码
    }
  });

  var mailOptions = {
    to: "1051928212@qq.com",
    from: "1966919376@qq.com",
    subject: '报名成功',
    text: text
  };

  transporter.sendMail(mailOptions, (error, info)=>{
    if (error) {
      return console.log(error);
    }
    console.log('邮件发送: ' + info.response);
    transporter.close();
  });
  return;
  
});

//@router POST users/apply
//@desc 用户报名信息提交
//@access public
router.post('/apply',(req,res)=>{
  var userFields = {};

  if (req.body.name) userFields.name=req.body.name;
  if (req.body.email) userFields.email = req.body.email;
  if (req.body.phone) userFields.phone = req.body.phone;
  if (req.body.stunum) userFields.stunum = req.body.stunum;
  if (req.body.direct) userFields.direct = req.body.direct;
  if (req.body.intro) userFields.intro = req.body.intro;

  new User(userFields).save().then(user=>{
    res.json(user);
  })
})

//@router GET users/getAll
//@desc 获取所有信息
//@access public
router.get('/getAll', (req, res) => {
  if(req.query.stunum){
    User.findOne({stunum:req.query.stunum})
      .then((user) => {
        if (!user) {
          return res.status(404).json('没有找到');
        }
        res.json(user);
      })
      .catch((err) => {
        res.status(404).json(err);
      })
    }else{
      User.find()
        .then((user) => {
          if (!user) {
            return res.status(404).json('没有任何内容');
          }
          res.json(user);
        })
        .catch((err) => {
          res.status(404).json(err);
        })
    }
});

//@router GET users/getOne
//@desc 获取单个信息
//@access public
router.get('/getOne/:id', (req, res) => {
User.findOne({_id:req.params.id})
    .then((user) => {
      if (!user) {
        return res.status(404).json('没有任何内容');
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(404).json(err);
    })
});

module.exports = router;
