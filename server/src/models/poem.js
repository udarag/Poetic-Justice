module.exports = (sequelize, DataTypes) => {
  const poem = sequelize.define('poem', {
    name: {
      type: DataTypes.STRING,
      unique: false
    },
    email: DataTypes.STRING,
    noun1: DataTypes.STRING,
    noun2: DataTypes.STRING,
    noun3: DataTypes.STRING,
    adjective1: DataTypes.STRING,
    adjective2: DataTypes.STRING,
    adjective3: DataTypes.STRING,
    adverb1: DataTypes.STRING,
    adverb2: DataTypes.STRING,
    adverb3: DataTypes.STRING,
    preposition1: DataTypes.STRING,
    preposition2: DataTypes.STRING,
    preposition3: DataTypes.STRING,
    verb1: DataTypes.STRING,
    verb2: DataTypes.STRING,
    verb3: DataTypes.STRING
  })
  return poem
}
