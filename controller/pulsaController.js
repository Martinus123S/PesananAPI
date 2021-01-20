const pulsaModel = require("../model/pulsa");

const getPulsa = async(req,res)=>{
    const pulsa = await pulsaModel.find()
    .then(data=>{
        if(!data){
            throw new Error("Data Tidak ada");
        }
        res.send(data).status(200);
    })
    .catch(err=>{
        res.send(err.message).status(404);
    })
}

const createPulsa = async(req,res)=>{
    const pulsa = new pulsaModel(req.body);
    await pulsa.save()
    .then(data=>{
        res.send({
            data:data,
            message:"Data berhasil di Buat"
        }).status(200);
    })
    .catch(err=>{
        res.send(err.message).status(404);
    })
}

const updatePulsa = async(req,res)=>{
    const pulsa = pulsaModel.findOneAndUpdate({_id:req.params.pulsaId},req.body,{new:true})
    .then(data=>{
        if(!data){
            throw new Error("Data tidak ada");
        }
        res.send(data).status(204);
    }).catch(err=>{
        res.send(err.message).status(404);
    })
}

module.exports = {
    getPulsa,
    createPulsa,
    updatePulsa
}