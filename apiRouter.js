var express     = require('express');
var apiRouter   = express.Router();

var usersRouter = require('./routes/users');
var testRouter  = require('./routes/test');

apiRouter.use('/test',testRouter);
apiRouter.use('/users', usersRouter)

module.exports = apiRouter;
