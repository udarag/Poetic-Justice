const { user } = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const newUser = await user.create(req.body)
      res.send(newUser.toJSON())
    } catch (error) {
      res.status(400).send({
        error: `${req.body.email} is already registered!`
      })
    }
  }
}
