"use strict";
exports.__esModule = true;
var Express = require("express");
var app = Express();
app.get('/', function (req, res) {
    res.send('teste');
});
app.listen(8080, function () {
    console.log('running');
});
