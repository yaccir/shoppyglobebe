import mongoose from "mongoose";


const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxLength:30,
        minLength:1,
        },

    middleName:{
              type:String,
             required:true,
            trim:true,
             maxLength:30,
             minLength:1,
    },

    lastName:{
              type:String,
        required:true,
        trim:true,
        maxLength:30,
        minLength:1,
    },

    email:{
        type:String,
        required:true,
        trim:true,
        maxLength:32,
   
    },

    mobileNumber:{
        type:String,
        required:true,
        trim:true,
        maxLength:15,

    },
    password:{
        type:String,
        required:true,
        trim:true,
        minLength:6,
    }
})


const userModel=mongoose.model("users",userSchema);

export default userModel;