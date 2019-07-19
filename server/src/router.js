const authController = require('./controllers/authController')
const authControllerPolicy = require('./policies/authContollerPolicy')

module.exports = (app) => {
  app.post('/register', authControllerPolicy.register, authController.register)
}
