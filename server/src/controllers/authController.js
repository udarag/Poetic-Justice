const { user } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const TIME = 604800
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: TIME
  })
}

module.exports = {
  async register (req, res) {
    try {
      const newUser = await user.create(req.body)
      const json = newUser.toJSON()
      res.send({
        user: json,
        token: jwtSignUser(json)
      })
    } catch (error) {
      console.log(error)
      res.status(400).send({
        error: `${req.body.email} is already registered!`
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const currUser = await user.findOne({
        where: {
          email: email
        }
      })
      if (!currUser) {
        return res.status(403).send({
          error: 'User not found'
        })
      }
      const isPasswordValid = await currUser.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'Incorrect password'
        })
      }
      const json = currUser.toJSON()
      res.send({
        currUser: json,
        token: jwtSignUser(json)
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: `Error trying to login`
      })
    }
  }
}
