'use strict';

var port = process.env.PORT || 420;

var express = require('express');
var app = express();

app.use(express.static('./'));

//app.get('./')

<<<<<<< HEAD
app.listen(420, function () {
  console.log('app listening on port 420!');
=======
app.listen(port, function () {
  console.log('app listening on port ' + port + '!');
>>>>>>> 7217866e26305297c9cae7639eb7b317cd7b3951
});