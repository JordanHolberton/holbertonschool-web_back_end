// filepath: /home/jordan/holbertonschool-web_back_end/Node_JS_basic/full_server/controllers/StudentsController.js
const readDatabase = require('../routes/utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];

    try {
      const fields = await readDatabase(dbFile);
      let response = 'This is the list of our students\n';

      for (const [field, students] of Object.entries(fields).sort()) {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      res.status(200).send(response.trim());
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const dbFile = process.argv[2];
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const fields = await readDatabase(dbFile);
      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
