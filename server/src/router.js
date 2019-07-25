const authController = require('./controllers/authController')
const poemController = require('./controllers/poemController')
const authControllerPolicy = require('./policies/authContollerPolicy')

module.exports = (app) => {
  app.post('/register', authControllerPolicy.register, authController.register)
  app.post('/login', authController.login)
  app.post('/poem', poemController.addPoem)
}
