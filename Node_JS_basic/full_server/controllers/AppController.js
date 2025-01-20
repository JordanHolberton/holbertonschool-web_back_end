// filepath: /home/jordan/holbertonschool-web_back_end/Node_JS_basic/full_server/controllers/AppController.js
class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
