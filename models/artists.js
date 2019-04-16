module.exports = function( sequelize, DataTypes ) {
    var Artist = sequelize.define("Artist", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        website: DataTypes.STRING,
        music_genre: DataTypes.STRING
    });

    // Artist Table
    Artist.associate( function( models ) {
        models.Artist.belongsToMany( models.Venue, { through: models.Gig })
    });

    return Artist;
};
