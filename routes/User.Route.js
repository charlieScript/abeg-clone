const express = require('express')

// controllers
const { registerUser, createAbegUserName } = require('../controllers/User.Controller')

// Middlewares
const { checkAbegUserNameMiddleWare} = require('../middlewares/User.Middleware')

const router = express.Router({
  strict: true
})

// @Post User Registration
router.post('/register', registerUser)

// @Post AbegUserName Creation
router.post('/register/username/:user', checkAbegUserNameMiddleWare, createAbegUserName)




module.exports = router

