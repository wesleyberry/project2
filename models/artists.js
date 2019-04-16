module.exports = function(sequelize, DataTypes) {
    var Artist = sequelize.define("Artist", {
      // Giving the Artist model a name of type STRING
      name: DataTypes.STRING
    });

    Artist.associate = function(models) {
        // Associating Artist with Posts
        Artist.hasMany(models.Gig, {
        });
    };

  return Artist;
};