const jwt = require('jsonwebtoken')
const secret = 'leonardocs1'

const USERS = {
  'leonardo@email.com': 'abc123'
}

const auth = async (req, res) => {
  const { user, passwd } = req.body
  if (USERS[user] && USERS[user] === passwd) {
    const token = jwt.sign({
      user
    }, secret, { expiresIn: '2 days' })
    return res.send({
      sucess: true,
      token
    })
  }

  res.send({
    sucess: false,
    message: 'wrong credentials'
  })
}

module.exports = {
  auth
}