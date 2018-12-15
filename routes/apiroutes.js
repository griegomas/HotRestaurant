var path = require('path');

module.exports = function(app){

app.get("/api/tables", function(req, res) {
    return res.json(reservations)
});

app.get("/api/waitList", function(req, res) {
    return res.json(waitList)
});

}