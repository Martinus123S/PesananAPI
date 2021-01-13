const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect("mongodb+srv://123martinus:sahabat123@pesancl.0fq7m.mongodb.net/pesanan?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database is Connect");
}).catch(err=>{
    console.log(err);
})
