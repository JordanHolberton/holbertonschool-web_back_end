// filepath: /home/jordan/holbertonschool-web_back_end/Node_JS_basic/full_server/utils.js
const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
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

    return fields;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
