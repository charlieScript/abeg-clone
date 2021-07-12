const jwt = require('jsonwebtoken')

const maxAge = 20 * Number.MAX_SAFE_INTEGER
const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  })
  return token
}

const verifyToken = (token) => {
  const verify = jwt.verify(token, process.env.JWT_SECRET)
  if (verify) {
    return jwt.decode(token, {
      json: true
    })
  } else {
    return verify
  }
}

module.exports = {
  createToken,
  verifyToken
}