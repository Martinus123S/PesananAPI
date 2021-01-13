const Order = require('../model/order');

const getOrder = function(req,res){
    const result = Order.find({userId:req.params.id})
    .then(data=>{
        console.log(data);
        res.json(data).status(200);
    })
    .catch(err=>{
        res.json(err).status(400);
    })
}

const saveOrder = function(req,res){
    // console.log(req.body);
    const order = new Order({
        userId: req.body.userId,
        name: req.body.name,
        orderFood:[{
            name:req.body.foodname,
            price:req.body.price,
            jlh_pesan:req.body.foodjumlah
        }],
        orderDrink:[{
            name:req.body.drinkname,
            price:req.body.drinkprice,
            jlh_pesan:req.body.jlh_pesan
        }],
        status:req.body.status,
        totalHarga:req.body.totalHarga
    });
    order.save(function(err){
        if(err){
            res.send(err).status(400);
            throw new Error("TIdak berhasil Disimpan")
        }
        res.send({
            status:"200",
            data:"Berhasil menyimpan data"
        })
    });
}

const updateOrder = function(req,res){
        Order.findById(req.params.id,function(err,data){
            if(err)
            {
                res.send({
                data : "Data Tidak ada",
            }).status(404);
                throw new Error("Data Tidak ada");
                
            }

        })
    
}

// const deleteOrder = function(req,res){
//     Order.deleteOne({_id:req.params.id},function(err){
//         if(err)
//             res.send(err);
//     })
// }


module.exports = {getOrder,saveOrder,updateOrder};