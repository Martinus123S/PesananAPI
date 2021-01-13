const mongoose = require('mongoose');
const {Schema} = mongoose;

const Drink = Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    }
})



const OrderSchema = Schema({
    userId:{
        type:String,
        required:true,
    },
    orderFood:[
        {
            nameFood:{
                type:String,
                required:false
            },
            price:{
                type:Number,
                required:false,
            },
            jlh_pesan:{
                type:Number,
                required:false
            }
        }
    ],
    orderDrink:[
        {
            nameDrink:{
                type:String,
                required:false
            },
            price:{
                type:Number,
                required:false
            },
            jlh_pesan:{
                type:Number,
                required:false
            }
        }
    ],
    status:{
        type:Number,
        required:false
    },
    totalHarga:{
        type:Number,
        required:false
    },
});

module.exports = mongoose.model('Order',OrderSchema);