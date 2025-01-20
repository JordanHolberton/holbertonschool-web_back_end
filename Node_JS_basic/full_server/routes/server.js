// filepath: /home/jordan/holbertonschool-web_back_end/Node_JS_basic/full_server/server.js
const express = require('express');
const router = require('./index');

const app = express();
const port = 1245;

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
