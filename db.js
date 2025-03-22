require ('dotenv').config()
const  mongoose =require('mongoose')
const uri=process.env.MONGO_URL

const mongo_connect=async()=>{

    try{
       const db=await mongoose.connect(uri)
        console.log('sucessfully connected to atlas database ')

        //create the schema  
        const schema= new mongoose.Schema({
            name:String,
            password:String
        })
        // create collcation  
        const collcation =mongoose.model("Ayan",schema)
        console.log("schema ready")
        const collcation1 =mongoose.model("k",schema)
        console.log("schema ready")
        // insert datA
        const insert=collcation.insertOne({"name":"AyanTest","password":"Testpasswprd"})
        console.log("data insert ")
    }catch(error)
    {
        if(error) console.error('error')

    }
}
// mongo_connect()
module.exports= mongo_connect
