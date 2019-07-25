const { poem } = require('../models')

module.exports = {
  async addPoem (req, res) {
    try {
      const newPoem = await poem.create(req.body)
      const json = newPoem.toJSON()
      res.send({
        poem: json
      })
    } catch (error) {
      console.log(error)
      res.status(500).send({
        error: `Error trying to submit words`
      })
    }
  }
}
