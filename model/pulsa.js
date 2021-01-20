const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pulsa = Schema({
    voucher:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    harga:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Pulsa",Pulsa);