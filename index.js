var express = require('express');
var dateFormat = require('dateformat');
var app = express();
var obj;
app.all("/", function(req, res){
    res.sendFile("index.html");
});
app.get("/:text", function(req, res) {
    var date;
    if (isNaN(parseFloat(req.params.text))) {
        date = new Date(req.params.text);
    } else {
        date = new Date(parseInt(req.params.text) * 1000);
    }
    var formatted;
    if (isNaN(date.getTime())) {
        formatted = null;
    } else {
        formatted = dateFormat(date, "mmmm dd, yyyy");
    }
    obj = {
        unix: date.getTime(),
        natural: formatted
    }
    res.end(JSON.stringify(obj));
});
var port=Number(process.env.PORT || 3000);

app.listen(port);
