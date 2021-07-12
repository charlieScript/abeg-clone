const { verifyToken } = require('../utils/JSONwebtoken');

const checkAbegUserNameMiddleWare = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const verify = verifyToken(token);
    if (verify) {
      req.user = verify;
      next();
    } else {
      res.status(400).json({ message: 'Unauthorised request!' });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: 'Unauthorised request!' });
  }
};

module.exports = {
  checkAbegUserNameMiddleWare,
};
