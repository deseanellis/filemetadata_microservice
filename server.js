// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer')
var upload = multer();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/get-file-size', function(req, res){
  res.json({error: "Invalid request!"});
});

app.post('/api/get-file-size', upload.single('user_file'), function(req, res){
  if (req.file) {
    res.json({filename: req.file.originalname, size: req.file.size});
  } else {
    res.json({error: "No file found!"});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
