module.exports = function( sequelize, DataTypes ) {
    var Venue = sequelize.define("Venue", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        venueName: DataTypes.STRING,
        street_address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipcode: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        website: DataTypes.STRING
    });

    // Venue Table
    Venue.associate = function( models ) {
        models.Venue.belongsToMany( models.Artist, { through: models.Gig })
    };

    return Venue;
};
