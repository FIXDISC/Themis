
const express = require('express')
const app = express()
const navigate = require ('./src/navigate.js')

app.use(express.static(__dirname + '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//app.set('view engine', 'html');
app.set('views', __dirname);


app.get('/', function(req, res){
  archivo = navigate.archivo
  end_pos = navigate.end_pos
  res.render('views/index',{file: archivo, end_pos: end_pos});
});

app.listen(3000, () => console.log('Example app listening on port http://localhost:3000'))

