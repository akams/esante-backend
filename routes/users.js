var express     = require('express');
var router      = express.Router();
var usersCtrl   = require('../controllers/usersCtrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register/', usersCtrl.register);
router.post('/login/', usersCtrl.login);

module.exports = router;
