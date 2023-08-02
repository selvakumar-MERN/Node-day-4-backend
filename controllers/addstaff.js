const staffModel= require('../model/staff')

const addStaff= async(req,res)=>{
    const{staffName,fatherName,gender,qualification,address,state,city,zip}=req.body
    const newStaff = new staffModel({
        staffName:staffName,
        fatherName:fatherName,
        gender:gender,
        qualification:qualification,
        address:address,
        state:state,
        city:city,
        zip:zip
    })
try{
     await newStaff.save()
    res.status(200).send("staff created sucessfully")
}
catch(error){
    res.status(400).send(error)
}
}

const getstaff= async(req,res)=>{
try{
    const find= await staffModel.find()
    res.status(200).send(find)
}
catch(error){
    res.status(400).send(error)
}
}

const editStaff= async(req,res)=>{
    const{id}=req.params
    const{staffName,fatherName,gender,qualification,address,state,city,zip}=req.body
try{
    const update= await staffModel.updateOne({_id:id},{$set:{"staffName":staffName,"fatherName":fatherName,"gender":gender,"qualification":qualification,"address":address,"state":state,"city":city,"zip":zip}})
    res.status(200).send("staff updated")
}
catch(error){
    res.status(400).send(error)
}
}

const deleteStaff=async(req,res)=>{
    const{id}=req.params
try{
    await staffModel.deleteOne({_id:id})
    res.status(200).send("staff deleted")
}  
catch(error){
    res.status(400).send(error)
}  
}

module.exports.addStaff=addStaff;
module.exports.getstaff=getstaff;
module.exports.editStaff=editStaff;
module.exports.deleteStaff=deleteStaff;