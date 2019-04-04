// Requiring the folder with data 
var friendsData = require("../data/friends");

// Using express to export GET and post requests
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })

    app.post("/api/friends", function (req, res) {
        // console.log (req);
        var userInput = req.body;
// Here is where you will add your logic for comparison of friends
        

// faseResponse for testing purposes
    var fakeResponse = {
            name: "John Doe",
            photo: "lsdkfk"
        }
        res.json(fakeResponse);
    })
}