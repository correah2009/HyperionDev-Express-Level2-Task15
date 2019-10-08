const express = require('express');
const fs = require('fs'); 
const app = express();
const person = require('./src/person.json');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send(`Welcome ${person.name}`);
});

app.get('*', function(req, res, next) {
    res.send(`Sorry! Can’t find that resource. Please check your URL`);
    // let err = new Error('Sorry! Can’t find that resource. Please check your URL');
    // err.statusCode = 404;
    // next(err);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
