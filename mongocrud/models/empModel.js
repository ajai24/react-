    const mongose =require('mongoose')
    const empSchema =new mongose.Schema({
        empid:Number,
        empname:String
    })

    const empmdl=mongose.model('empmdle',empSchema)
    module.exports=empmdl
