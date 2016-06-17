'use strict';

var express = require('express');
var app = express();

app.use(express.static('./'));

//app.get('./')

app.listen(420, function () {
  console.log('app listening on port 420!');
});