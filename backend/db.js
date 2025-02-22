const  mongoose =require("mongoose");


const dbConnection = async()=>{

    try{

        const connection =await   mongoose.connect("mongodb+srv://nt34542:nikhil@connect.m4hlb.mongodb.net/paytym");
        console.log(" DB CONNECTION SUCCESSFULL")
    }
    catch(err){
        console.log("ERROR IN DB CONNECTION")
    }
}

const userSchema = new mongoose.Schema({
    firstName :{
        type:String,
        minLength :4
    },
    lastName :{
        type:String
    },
    email :{
        type:String,
        required:true,
        
    },
    password :{
        type:String,
        required:true,
        minLength:6
    },
})

module.exports = mongoose.model("User",userSchema) ;


