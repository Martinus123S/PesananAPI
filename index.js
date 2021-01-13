const mongoose = require('mongoose');
mongoose.Promise = global.Promise
var server_port =  process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database is Connect");
}).catch(err=>{
    console.log(err);
})
const connection = mongoose.connection;
connection.once("open",function(){
    console.log("Server is running on Port: " + server_port);
})
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
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});