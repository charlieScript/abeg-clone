const express = require('express');

const { sendMoney } = require('../controllers/Transactions.Controller');

const {
  checkAbegUserNameMiddleWare,
} = require('../middlewares/User.Middleware');

const router = express.Router({
  strict: true,
});

//@POST Send money
// @Request format
//
router.post('/credit/:user', checkAbegUserNameMiddleWare, sendMoney);


module.exports = router;
