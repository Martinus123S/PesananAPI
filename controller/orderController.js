const Order = require('../model/order');

const getOrder = async(req,res)=>{
    console.log(req.body);
    await Order.findOne({userId:req.query.user_id})
    .then(data=>{
        if(!data){
            throw new Error("message");
        }

        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err.message)
    })
}

const saveOrder = async(req,res)=>{
    // console.log(req.body);
    const products = req.body._id;
    console.log(req.body.iduser);
    await Order.findOne({userId:req.body.iduser})
    .then((ord)=>{
        if(!ord){
            const order = new Order({
                userId:req.body.iduser,
                status:1,
                totalHarga:req.body.total
            });
            order.product = [{
                idProduct:products,
                nama:req.body.nama,
                price:req.body.total,
                jlh_pesan:req.body.pesanan
            }];
            order.save(function(err){
                if(err){
                    res.send(err.message).status(400);
                    throw new Error(err.message)
                }
                return res.send({
                    status:"200",
                    data:"Berhasil menyimpan data"
                });
            });
        }
        console.log("yes")
        const orderIndex = ord.product.findIndex((orders)=>{
            return orders.idProduct.toString() === products
        })
        console.log("yes")
        let newQuantity = req.body.pesanan;
        console.log("yes")
        let total = req.body.total;
        console.log("yes")
        const updateOrder = [...ord.product];
        if(orderIndex >= 0){
            updateOrder[orderIndex].jlh_pesan = newQuantity;
            updateOrder[orderIndex].price = total;
        }else{
            updateOrder.push({
                idProduct:products,
                nama:req.body.nama,
                price:req.body.total,
                jlh_pesan:newQuantity
            })
            console.log(updateOrder);
        }
        ord.status = 1;
        let totalSemua = 0;
        for(var product in updateOrder){
            console.log(updateOrder[product].price)
            totalSemua+=updateOrder[product].price;
        }
        console.log(totalSemua)
        ord.totalHarga = totalSemua;
        ord.product = updateOrder;
        res.status(200).send("Oke");
        return ord.save();
    }).catch(err=>{
        console.log(err.message);
    })
    // console.log(order);
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