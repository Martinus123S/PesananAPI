const roomModel = require("../model/room");

const getRoom = async(req,res)=>{
    const room = await roomModel.find()
    .then(data=>{
        res.send(data).status(200);
    })
    .catch(err=>{
        res.send(err.message).status(404);
    })
}

const getOneRoom = async(req,res)=>{
    const room = await roomModel.findById({_id:req.params.roomId})
    .then(data=>{
        if(!data)
            throw new Error("Data tidak ada")
        res.send(data).status(200);
    })
    .catch(err=>{
        res.send(err.message).status(404);
    })
}

const createRoom = async(req,res)=>{
    const room = new roomModel(req.body)
    await room.save()
    .then(data=>{
        res.send(data).status(200);
    })
}
const updateRoom = async(req,res)=>{
    const room = await roomModel.findOneAndUpdate({_id:req.params.roomId},req.body,{new:true})
    .then(data=>{
        res.send({message:"Data Berhasil di Update"}).status(204)
    })
    .catch(err=>{
        res.send(err.message).status(400);
    })
    
}
const deleteRoom = async(req,res)=>{
    const room = await roomModel.deleteOne({_id:req.params.roomId})
    .then(data=>{
        res.send({message:"Berhasil menghapus data"}).status(202);
    })
    .catch(err=>{
        res.send(err.message).status(404);
    });
}

module.exports = {
    getRoom,
    getOneRoom,
    createRoom,
    updateRoom,
    deleteRoom
}