var bcrypt = require("bcrypt-nodejs");

// eslint-disable-next-line no-undef
Band.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

// eslint-disable-next-line no-undef
Band.hook("beforeCreate", function(user) {
user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});
// eslint-disable-next-line no-undef
return Band;