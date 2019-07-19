const joi = require('joi')

module.exports = {
  register (req, res, next) {
    const filter = {
      email: joi.string().email(),
      password: joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    // eslint-disable-next-line no-unused-vars
    const { error, value } = joi.validate(req.body, filter)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Please enter a valid email address'
          })
          break

        case 'password':
          res.status(400).send({
            error: 'Please enter a password that is at least 6 characters in length'
          })
          break

        default:
          res.status(400).send({
            error: 'Please try a new email/password combination'
          })
      }
    } else {
      next()
    }
  }
}
