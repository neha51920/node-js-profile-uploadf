var usersController = require('../controllers/users.server.controller');
var isAuthenticated = require('../../../middlewares/auth.server.middlewares').isAuthenticated;
var  updateAnUserImage = require ('./userController.js');
var upload = require('./upload.js')

module.exports = function (app) {
    
    app.route('/api/me')
        .get(isAuthenticated, usersController.me);

    app.route('/api/ImageUpload')
        .get(upload, updateAnUserImage);

}