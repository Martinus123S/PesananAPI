require('./connection/connection');
const cors = require('cors');
const foodController = require('./controller/foodController');
const express = require('express');
const {Router} = require('express');
const router = express.Router();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// router.get('/',function(req,res){
//     console.log("Work");
// });
router.route('/users')
.get(foodController.getOrder)
.post(foodController.saveOrder);
app.put('/users/:id',foodController.updateOrder);
app.use(cors());
app.use(router);
app.listen(3000);