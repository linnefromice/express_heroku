const app = require('./app');

// launch
const port = app.get('port');
app.listen(port, function() {
  console.log("App is running at localhost:" + port)
});
