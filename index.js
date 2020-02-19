const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  response.send('Hello world! created by linnefromice');
});

const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
