const mongoose = require("mongoose");
const {Schema} = mongoose;

const User = Schema({
    namaLengkap:{
        type:String,
        required:true
    },
    noKtp:{
        type:String,
        required:true,
    },
    noHp:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:false,
    }
})

module.exports = mongoose.model('User',User);