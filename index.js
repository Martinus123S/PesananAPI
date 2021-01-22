require('./connection/connection');
const orderController = require('./controller/orderController');
const express = require('express');
const {Router} = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// router.get('/',function(req,res){
app.use(express.urlencoded({extended:true}));
require('./routes/foodRoutes')(app);
require('./routes/roomRoutes')(app);
require('./routes/pulsaRoutes')(app);
require('./routes/userRoutes')(app);
// const foodRoutes = 
//     console.log("Work");
// });
router.route('/order')
.get(orderController.getOrder)
.post(orderController.saveOrder);
router.put('/order/:id',orderController.updateOrder);
app.use(router);
app.listen((process.env.PORT || 3001));