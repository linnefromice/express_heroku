const express = require('express');
const partials = require('express-partials');
const app = express();
app.set('view engine', 'ejs');
app.use(partials())

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('home', { title: "Home"});
});

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
