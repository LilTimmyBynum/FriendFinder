//apiRoutes
console.log("....in apiRoutes......");

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.

var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
  });
};
