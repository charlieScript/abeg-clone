const mongoose = require('mongoose');

const { passwordEncrypt } = require('../utils/passwordEncrtytion')

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minLength: 6,
    },
    abegUserName: {
      type: String,
      unqiue: true,
    },
    balance: {
      type: mongoose.Schema.Types.Decimal128,
      required: true,
    },
  },
  {
    timestamps: Date.now,
  },
);

userSchema.pre('save', async function(next) {
  // password hashing
  this.password = await passwordEncrypt(this.password)

  next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;
