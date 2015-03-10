var express = require('express');
var router = express.Router();

var Cart = require('../../model/cartSchema');

router.post('/', function (req) {
  var id = req.body.id;
  Cart.create({itemId: id, number: 1});
});

module.exports = router;
