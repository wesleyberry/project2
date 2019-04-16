module.exports = function( sequelize, DataTypes ) {
    var Artist = sequelize.define("Artist", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
        instrumentation: DataTypes.STRING,
        numberOfMembers: DataTypes.INTEGER,
        website: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        profileImage: DataTypes.STRING
    });

    // Artist Table
    Artist.associate( function( models ) {
        models.Artist.belongsToMany( models.Venue, { through: models.Gig })
    });

    return Artist;
};
