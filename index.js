const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.render('home', { creator: "linnefromice"});
});

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
