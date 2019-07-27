var express = require('express');
var router = express.Router();
var memberModel = require('../models/member');
var taskModel = require('../models/task');

/* GET users listing. RUN ONCE! */
router.get('/', async function (req, res, next) {
  res.json(await taskModel.find());
});


router.post('/', async function (req, res, next) {
  let t = new taskModel(req.body);
  res.json(await t.save());
});

module.exports = router;


router.get('/allMembers', async function (req, res, next) {
  res.json(await memberModel.find());
})
