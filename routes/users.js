var express     = require('express');
var router      = express.Router();
var usersCtrl   = require('../controllers/usersCtrl');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register/', usersCtrl.register);
router.post('/login/', usersCtrl.login);

module.exports = router;
