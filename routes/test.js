var express     = require('express');
var router      = express.Router();
var testCtrl   = require('../controllers/testCtrl');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get('/api', function(req, res, next) {
  res.send("API is working properly");
});
router.get('/db', testCtrl.pingDb);

module.exports = router;
