var path = require('path');
var reservations = require("../api/tables");
var waitList = require("../api/waitList");

module.exports = function(app){

app.get("/api/tables", function(req, res) {
    return res.json(reservations)
});

app.get("/api/waitList", function(req, res) {
    return res.json(waitList);
});

app.post("/api/tables", function(req, res){
    if (reservations.length < 5){
        reservations.push(req.body);
        res.json(true);
    }
    else {
        waitList.push(req.body);
        res.json(false);
      }
});
}