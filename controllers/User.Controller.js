const User = require('../models/User.Model');

// jwt
const { createToken } = require('../utils/JSONwebtoken');

const registerUser = async (req, res) => {
  const { email, firstName, lastName, password } = req.body;
  try {
    const user = await User.create({
      email,
      firstName,
      lastName,
      password,
      balance: '0.00',
    });
    const token = createToken(user.id);
    res.status(200).json({
      token: token,
      user: {
        firstName: user.firstName,
      },
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'An error occurred' });
  }
};





const createAbegUserName = async (req, res) => {
  const { user } = req.params
  // console.log(user, req.user.id)
  // const userName = await User.findById(req.user)
  // console.log(userName)
  try {
    const userName = await User.findByIdAndUpdate(req.user.id, {
      abegUserName: user
    });
    res.status(200).json({ message: `Welcome ${userName.abegUserName}` });
  } catch (error) {
    console.log(error)
    res.status(200).json({ message: `user not created` });
  }
}

module.exports = {
  registerUser,
  createAbegUserName
};
