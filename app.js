const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
  res.render('index');
});

let port = process.env.PORT;
if (port == null|| port =="") {
  port = 3000;
}

app.listen(port, function(req, res){
  console.log('server started at port 3000');
});
