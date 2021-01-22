const mongoose = require('mongoose');
const {Schema} = mongoose;
const OrderSchema = Schema({
    userId:{
        type:String,
        required:true,
    },
    product:[
        {
            idProduct:{
                type:String,
                required:false
            },
            nama:{
                type:String,
                required:false,
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