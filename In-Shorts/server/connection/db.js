import mongoose from 'mongoose'

const Connection=async()=>{
    try{  
const url ='mongodb+srv://Mayank:12345@cluster0.jxd9m.mongodb.net/Cluster0?retryWrites=true&w=majority'

await mongoose.connect(url,{useNewUrlParser: true})
console.log("database connected")
}
catch(err){
    console.log(err)
}
}

export default Connection;
