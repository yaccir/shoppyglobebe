import mongoose from "mongoose";

const shoppyGlobeSchema=mongoose.Schema({
    title:{
        type:String,
        required :true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    returnPolicy:
    {
        type:String,
        trim:true,
        default:"No return available"
    },
    warrantyInformation: {
      type: String,
      default: ""
    },

    description: {
      type: String,
      required: true
    },

    stock: {
      type: Number,
      required: true
    },

    minimumOrderQuantity: {
      type: Number,
      required: true,
      default: 1
    },

    category: {
      type: String,
      required: true
    },

    rating: {
      type: String,
      required: true
    },

    discountPercentage: {
      type: Number,
      required: true
    }

})


const shoppyModel=mongoose.model("products",shoppyGlobeSchema);
export default shoppyModel;
