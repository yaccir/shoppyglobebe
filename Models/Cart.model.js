import mongoose from "mongoose";

const cartSchema=mongoose.Schema({
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true,
        default:1   
    }
});

const cartModel=mongoose.model("cart",cartSchema);
export default cartModel;