const express = require("express");
const app  = express();
//const connect = require('connect')
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;



app.use(bodyParser.json());
//app.use(express.json());

app.use(cors())

app.get('/', function(req, res){
    res.send('Hello from server');
});

app.post('/enroll',function(req, res){
    console.log(req.body);
    res.status(401).send({"message": "Data recived"});
})

app.listen(PORT, function(){
    console.log("server running on locslhost:" + PORT);

});