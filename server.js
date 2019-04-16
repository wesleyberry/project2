require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");

var db = require("./models");
var passport = require("./config/passport");


var app = express();

// eslint-disable-next-line no-undef
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard kitty", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");


require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/artists-api-routes")(app);
// require("./routes/venues-api-routes")(app);

var syncOptions = { force: false };

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    // eslint-disable-next-line no-console
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
