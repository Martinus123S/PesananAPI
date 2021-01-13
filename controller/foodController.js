const foodModel = require('../model/food');

const getAllFood = async(req,res)=>{
    await foodModel.find()
    .then(data=>{
        res.send(data).status(200);
    }).catch((error)=>{
        res.send(error.message).status(400);
    })
}
const createFood = async(req,res)=>{
    const food = new foodModel(req.body);
    await food.save()
    .then(data=>{
        res.send({
            message:"Data Berhasil Ditambahkan",
            data:data
        }).status(200);
    }).catch(err=>{
        res.send(err.message).status(404);
    })
}

const findOne = async(req,res)=>{
    const food = foodModel.findOne({_id:req.params.foodId})
    .then(data=>{
        if(!data){
            res.send({
                message:"Food not found for id"+req.body.foodId
            })
        }
        res.send(data).status(200);
    }).catch(err=>{
        res.send(err.message).status(404);
    })
}

module.exports = {
    getAllFood,
    findOne,
    createFood
}