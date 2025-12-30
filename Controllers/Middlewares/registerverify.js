import userModel from "../../Models/User.model.js";
import jwt from "jsonwebtoken";



//middleware for verify the registration of user
export async function verifyregisteruser(req,res,next)
{

const {email,mobileNumber}=req.body;


        try{
            const registerede=await userModel.findOne({
                 email
            })
            if(registerede)
                return res.status(409).json({"message":"email already exists"})

            const registeredm=await userModel.findOne({mobileNumber})

            if(registeredm)

                return res.status(409).json({"message":"mobileno already exsts"})

            next();
        }
        catch(err)
        {
            return res.status(500).json({"mesage":err.message});
        }




}

//middleware for checking the token and user should be 
// logged in to access the cart routes and action routes 
export async function verifytoken(req,res,next)

{
   
    const header=req.headers.authorization;
    if(!header)
    {
        return res.status(401).json({message:"Login first"})
    }

    const token=header.split(" ")[1];
   

    try{

        //jwt token verification
    jwt.verify(token,'SEARCHED_USER', 
        function(err, decoded) {
            
        console.log(decoded) 
        next();
});
        

    }

    catch(err)
    {
        return res.status(500).json({message:"internal server error"})
    }





}