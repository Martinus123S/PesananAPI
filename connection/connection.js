const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect("mongodb://123martinus:sahabat123@pesancl-shard-00-00.0fq7m.mongodb.net:27017,pesancl-shard-00-01.0fq7m.mongodb.net:27017,pesancl-shard-00-02.0fq7m.mongodb.net:27017/pesanan?ssl=true&replicaSet=atlas-8ra1bv-shard-0&authSource=admin&retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false})
.then(()=>{
    console.log("Database is Connect");
}).catch(err=>{
    console.log(err);
})
