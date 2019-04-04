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
        var totalDifference = 999;
        var match;
        for(var i = 0; i <friendsData.length; i++ ) {
            var newTotalDiff = 0;
            
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                newTotalDiff += Math.abs(userInput.scores[j] - friendsData[i].scores[j]);
            }
            if (newTotalDiff < totalDifference) {
                match = friendsData[i];
                totalDifference = newTotalDiff
            }
        }
        friendsData.push(userInput);
        res.json(match);
    });

}


// // fakeResponse for testing purposes
//     var fakeResponse = {
//             name: "John Doe",
//             photo: "lsdkfk"
//         }
//         res.json(fakeResponse);
//     })
