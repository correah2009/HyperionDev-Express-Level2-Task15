const express = require('express');
const fs = require('fs'); 
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    const data = JSON.parse(fs.readFileSync('./src/person.json'));
    res.send(`Welcome ${data.name}`);
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