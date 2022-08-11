const gitController = require('../controllers/gitController');

module.exports = (app) => {
    app.get('/getRepositories', gitController.getRepositories);
}