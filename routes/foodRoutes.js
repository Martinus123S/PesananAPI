
module.exports=(app)=>{
const foodController = require('../controller/foodController');

app.route('/food')
.get(foodController.getAllFood)
.post(foodController.createFood);

app.get('/food/:foodId',foodController.findOne)
}