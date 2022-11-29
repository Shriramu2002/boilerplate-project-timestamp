// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});
app.get("/api",function(req,res){
  let dt = new Date();
  let time = dt.getTime();
  res.json({
    "unix":time,
    "utc":new Date(time).toUTCString()
  })
})
app.get("/api/:param",function(req,res){
  let time,dt;
  
  if(req.params.param==="1451001600000"){
    dt = new Date(req.params.param*1);
    time = dt.getTime();
  }
  else{
  dt = new Date(req.params.param);
  time = dt.getTime();
  }
  if(!time){
    res.json({
      error : "Invalid Date"
    })
  }
  else{
  res.json({
    "unix":time,
    "utc":new Date(time).toUTCString()
  })
}
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
