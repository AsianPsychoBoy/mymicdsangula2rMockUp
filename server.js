'use strict';

var express = require('express');
var app = express();

app.use(express.static('./'));

//app.get('./')

app.listen(process.env.PORT, function () {
  console.log('app listening on port unknown!');
});