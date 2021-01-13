require('./connection/connection');

const express = require('express');
const {Router} = require('express');
const router = express.Router();
const app = express();
// router.get('/',function(req,res){
const cors = require('cors');

app.use(cors());
const orderController = require('./controller/orderController');


app.use(express.json());
app.use(express.urlencoded({extended:true}));
require('./routes/foodRoutes')(app);
// const foodRoutes = 
//     console.log("Work");
// });
router.route('/order')
.get(orderController.getOrder)
.post(orderController.saveOrder);
router.put('/order/:id',orderController.updateOrder);
app.use(router);
app.listen((process.env.PORT || 3000));