const http = require('http');
const url = require('url');

const countStudents = require('./3-read_file_async');

const path = process.argv[2];

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (parsedUrl.pathname === '/') {
    res.end('Hello Holberton School!\n');
  } else if (parsedUrl.pathname === '/students') {
    if (!path) {
      res.end('Database file path is missing\n');
      return;
    }

    try {
      const output = await countStudents(path);
      res.end(`This is the list of our students\n${output}`);
    } catch (err) {
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
