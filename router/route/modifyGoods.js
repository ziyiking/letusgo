var express = require('express');
var router = express.Router();

var goodModel = require('../../model/goodsSchema.js');

router.get('/:id', function (req, res, next) {

  var id = req.params.id;

  goodModel.findById(id, function (err, goods) {
    if(err) return next(err);
    res.render('modifyGoods', {good:goods});
  })
  
});

module.exports = router;
