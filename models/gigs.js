module.exports = function(sequelize, DataTypes) {
    var Gig = sequelize.define("Gig", {
      // Giving the Author model a name of type STRING
      name: DataTypes.STRING,
      date: DataTypes.DATE
    });
  
    Gig.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Gig.belongsTo(models.Venue, {
        onDelete: "cascade"
      });
    };
  
   

    Gig.associate = function(models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Gig.belongsTo(models.Artist, {
        onDelete: "cascade"
      });
    };
  
    return Gig;
  };