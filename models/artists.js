module.exports = function( sequelize, DataTypes ) {
    var Artist = sequelize.define("Artist", {
        id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: DataTypes.STRING,
        genre: DataTypes.STRING,
        instrumentation: DataTypes.STRING,
        numberOfMembers: DataTypes.INTEGER,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        profileImage: DataTypes.STRING,
        website: DataTypes.STRING
    });

    // Artist Table
    Artist.associate = function( models ) {
        models.Artist.belongsToMany( models.Venue, { through: models.Gig })
    };

    return Artist;
};
