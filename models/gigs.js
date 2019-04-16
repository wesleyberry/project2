module.exports = function( sequelize, DataTypes ) {
    var Gig = sequelize.define("Gig", {
        date: {
            type: DataTypes.DATE
        }
    });

    return Gig;
}

