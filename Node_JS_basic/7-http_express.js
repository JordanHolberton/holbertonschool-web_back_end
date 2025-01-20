const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;
const databaseFilePath = process.argv[2];

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (!databaseFilePath) {
    res.status(500).send('Database file path is missing');
    return;
  }

  try {
    const data = await fs.readFile(databaseFilePath, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      throw new Error('Cannot load the database');
    }

    const studentData = lines.slice(1);
    const fields = {};

    studentData.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (firstname && field) {
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    let output = 'This is the list of our students\n';
    for (const [field, students] of Object.entries(fields).sort()) {
      output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    res.send(output.trim());
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
