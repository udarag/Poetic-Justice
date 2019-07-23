const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcryptjs'))

function hasher (user, options) {
  const SALT = 8
  if (!user.changed('password')) {
    return
  }

  return bcrypt
    .genSaltAsync(SALT)
    .then(salt => bcrypt.hashSync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash)
    })
}

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hasher,
      beforeUpdate: hasher
      // beforeSave: hasher
    }
  })

  user.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
  }

  return user
}
