const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser: true, useUnifiedTopology: false})
.then(()=>{
    console.log("Database is Connect");
}).catch(err=>{
    console.log(err);
})
