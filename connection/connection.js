const mongoose = require('mongoose');
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/admin',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log("Database is Connect");
}).catch(err=>{
    console.log(err);
})
