import cartModel from "../Models/Cart.model.js";
import shoppyModel from "../Models/Shoppyglobe.model.js";



// Add Products Controller

export async function addproducts(req,res)
{
 
    try{
        const addedproduct=await shoppyModel.insertMany(req.body);
            return res.status(201).json({
            success: true,
            message: "Product added successfully",
            data: addedproduct
        });
    }
    catch(err)
    {
      return  res.status(500).json({message:err.message});
    }
}


// Fetch Products Controller
export async function  fetchproducts(req,res)
{

    try{

        const fetchedproducts=await shoppyModel.find({});

        // Check if products exist
        if(fetchedproducts.length===0)
         return   res.status(404).json({message:"No products found"});
        else
         return   res.status(200).json(fetchedproducts);

    }
    catch(err){
          return   res.status(500).json({message:err.message});

    }


} 
// Fetch Product by ID Controller
export async function fetchproductbyid(req,res)
{

    const {id}=req.params

    try{
        const fetchedproduct=await shoppyModel.findById(id);
        if(!fetchedproduct)
         return   res.status(404).json({message:"Product not found"});
        else
         return   res.status(200).json(fetchedproduct);   

    }
    catch(err){
        return     res.status(500).json({message:err.message});   
    }
} 


// Add to Cart Controller
export async function addtocart(req,res)
{


    const {productid,productQuantity}=req.body;
    try{
        const newcartitem=await cartModel.findOne({productid})
        console.log(newcartitem)
        // Check if product already in cart
        if(newcartitem)
        {
          return  res.status(400).json({message:"Product already in cart"});
        }
        else
        {
            const cartitem= await cartModel.create({
                productid,
                productQuantity
            });
            
          return  res.status(201).json({cartitem ,"message":"item added successfully"});
        }
    }
    catch(err)
    {
          return      res.status(500).json({message:err.message});
    }



} 


export  async function deleteproduct(req,res)
{
    const {id}=req.body;
    try{
        const deletedproduct=await shoppyModel.findByIdAndDelete(id);
        if(!deletedproduct)
         return   res.status(404).json({"message":"product not found"});

        else{
        return  res.status(200).json({message:"product deleted successfully"});
        }
    }
    catch(err)
    {
     return   res.status(500).json({message:err.message});
    }
}



// Get Cart Items Controller
export async function getcartitems(req,res)
{
    try{
        const cartitems=await cartModel.find({})
        // Check if cart is empty
        if(cartitems.length===0)
        return    res.status(404).json({message:"No items in cart"});
        else
        return    res.status(200).json(cartitems);
    }
    catch(err)
    {
          return      res.status(500).json({message:err.message});
    }

} 

export async function updatecartitem(req,res)
{
    const {id, quantity}=req.body;
    try{
        const updatedcartitem= await cartModel. findOneAndUpdate({productid:id}, 
            { $set: { productQuantity: quantity } },  
            { new: true });
// Check if cart item exists
       console.log(updatedcartitem)
        if(!updatedcartitem)
        {
            console.log("Updated cart item:", updatedcartitem);
         return   res.status(404).json({message:"Cart item not found"});
        }
      return  res.status(200).json({message:"item updated"});

    }
    catch(err)
    {
            return      res.status(500).json({message:err.message});
    }

} 
export async function deletecartitem(req,res)
{

    const {id}=req.body;
    try{
        const deleteditem=await cartModel.findOneAndDelete({productid:id});
       // Check if cart item exists
       console.log(deleteditem)
        if(!deleteditem)
        {
         return   res.status(404).json({message:"Cart item not found"});
        }

      return  res.status(200).json({deleteditem,message:"item deleted successfully"});
    }
    catch(err)
    {
         return       res.status(500).json({message:err.message});
    }


}