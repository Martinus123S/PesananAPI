const mongoose= require('mongoose');
const {Schema} = mongoose
const Food = Schema({
    name: {
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required:true,
    },
    stock:{
        type:Number,
        required:true,
    },
    stockLaku:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        required:true,
    }
});

module.exports = mongoose.model('Food',Food);