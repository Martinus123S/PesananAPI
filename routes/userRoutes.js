module.exports = (app)=>{
    const userController = require("../controller/userController");

    app.route('/register').post(userController.register);
    app.route('/login').post(userController.login)
}