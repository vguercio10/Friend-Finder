// Require path dependency
var path = require("path");

// Export the file as a module
// This is displaying the static html pages
module.exports = function (app) {

  // app.get("*", function (req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
}