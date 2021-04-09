// Load the modules
var express = require('express'); //Express - a web application framework that provides useful utility functions like 'http'
var app = express();
var bodyParser = require('body-parser'); // Body-parser -- a library that provides functions for parsing incoming requests
app.use(bodyParser.json());              // Support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support encoded bodies


// Set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/'));// Set the relative path; makes accessing the resource directory easier

// Simple get api provided to check if the node.js starts up successfully. Opening up http://localhost:3000 should display the below returned json.
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome!" });
});

//Add your code support two new API's /add and /divide here.
app.post("/add", (request, response) =>{

  const {num1, num2} = request.body;
  if(((typeof num2) == "string") || ((typeof num1) == "string")){
    var err = "ERROR";
    return response.status(400).send(err);
  }

  else{
    response.json({
      status: "test success!", result: (num1 + num2)
    });
  }

});

app.post("/divide", (request, response) =>{

  const {num1, num2} = request.body;
  if(((typeof num2) == "string") || ((typeof num1) == "string") || num2 == 0){
    var err = "ERROR";
    return response.status(400).send(err);
  }

  else{
    response.json({
      status: "test success!", result: (num1 / num2)
    });
  }

});


module.exports = app.listen(3000);
console.log('3000 is the magic port');
