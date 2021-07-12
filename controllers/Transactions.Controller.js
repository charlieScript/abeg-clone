const User = require('../models/User.Model');

const sendMoney = async (req, res) => {
  const reciever = req.params.user;
  try {
    const userSender = await User.findById(req.user.id);
    const userReciever = await User.find({ abegUserName: reciever }, {
      balance: req.body.amount
    });
    console.log(userReciever[0])
    // userReciever[0].balance = req.body.amount
    // await userReciever[0].save()
    res.status(200).json({ message: `${req.body.amount} sent to ${userReciever[0].abegUserName} from ${userSender.abegUserName}`})
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: 'An error occurred!!'})
  }
};

module.exports = {
  sendMoney,
};
