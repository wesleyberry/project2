var bcrypt = require("bcrypt-nodejs");

Band.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

Band.hook("beforeCreate", function(user) {
user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});
return Band;