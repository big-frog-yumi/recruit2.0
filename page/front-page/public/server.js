var express = require('express')
var nodemailer = require("nodemailer");

// 加载body-parser 处理post提交过来的数据
var bodyParser = require('body-parser');
var app = express()
var apiRoutes = express.Router()

// bodyParser 设置,自动会在req上面添加
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
apiRoutes.post('http://localhost:8081', function (req, res) {
  var text = '${req.body.name } 同学已成功报名，联系方式是 ${req.body.email}！';

  if (req.body.name && req.body.email) {
    res.json({
      iRet: 1,
      info: 'ok',
    });

    var transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      service: 'qq',
      secure: true,
      port:465,
      auth: {
        user: "1966919376@qq.com",
        pass: ammaejzfkuekecef
      }
    });

    var mailOptions = {
      to: "1051928212@qq.com",
      from: "1966919376@qq.com", 
      subject: '报名成功', 
      html: '<b>Hello world </b>'
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('邮件发送: ' + info.response);
      transporter.close();
    });
  } else {
    res.json({
      iRet: -1,
      info: 'error',
    });
    return;
  }
});
app.use('/api', apiRoutes)