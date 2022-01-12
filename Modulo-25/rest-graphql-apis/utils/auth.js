const jwt = require('jsonwebtoken')

const needsAuth = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const secret = 'leonardocs1'
    const header = req.headers.authorization
    const headerParts = header.split(' ')
    try {
      const payLoad = jwt.verify(headerParts[1], secret)
      res.locals.user = payLoad.user
      return next()
    } catch (err) {

    }
  }
  res.send({
    error: true,
    message: 'needs auth'
  })
}

module.exports = needsAuth