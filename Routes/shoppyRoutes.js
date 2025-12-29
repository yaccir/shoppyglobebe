import { verifyregisteruser, verifytoken } from "../Controllers/Middlewares/registerverify.js";
import { addproducts, addtocart, deletecartitem, deleteproduct, fetchproductbyid, fetchproducts, getcartitems, updatecartitem } 
from "../Controllers/shoppyglobe.controller.js";
import { userLogin, userRegister } from "../Controllers/user.controller.js";




export function shoppyRoutes(app) {
// Product Routes
    app.get("/products",fetchproducts);
    app.get("/products/:id",fetchproductbyid);
    app.post("/addproducts",verifytoken,addproducts);
    app.delete("/products",verifytoken,deleteproduct);

     
    
// Cart Routes
    app.post("/cart",verifytoken,addtocart);
    app.get("/cart",verifytoken,getcartitems);
    app.put("/cart/:id",verifytoken,updatecartitem);
    app.delete("/cart/:id",verifytoken,deletecartitem);

//userlogin routes
    app.post("/register",verifyregisteruser,userRegister);
    app.post("/login",userLogin);



}
