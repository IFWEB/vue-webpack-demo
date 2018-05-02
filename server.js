var express = require('express'),
    app = new express();


app.use(express.static(__dirname));

app.listen(3001);

