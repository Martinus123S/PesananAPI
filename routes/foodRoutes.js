
module.exports=(app)=>{
const foodController = require('../controller/foodController');

app.route('/food')
.get(foodController.getAllFood)
.post(foodController.createFood);

app.route('/food/:foodId')
.get(foodController.findOne)
.put(foodController.updateFood);
}