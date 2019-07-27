var express = require('express');
var router = express.Router();
var memberModel = require('../models/member');

/* GET users listing. RUN ONCE! FEED DATA */
router.get('/default', async function (req, res, next) {
  let ma = new memberModel({ name: "sima" });
  let mb = new memberModel({ name: "dima" });
  let mc = new memberModel({ name: "shoshi" });
  await ma.save(); await mb.save(); await mc.save();

  res.send('ok');
});

module.exports = router;
