module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      password: DataTypes.STRING
    });
}