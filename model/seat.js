const mongoose = require('mongoose')
const {Schema} = mongoose;

const Seat = Schema({
    capacity:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        required:true,
    },
    user:[
        {
            userId:{
                type:String,
                required:true,
            }
        }
    ]
})