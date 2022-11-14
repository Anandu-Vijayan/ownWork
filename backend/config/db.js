const mongoose =require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo Db connected");
    }catch{
        console.error(`Error:{error.message}`)
        process.exit()
    }
}
module.exports=connectDB