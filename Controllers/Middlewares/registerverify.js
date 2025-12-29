import userModel from "../../Models/User.model.js";
import jwt from "jsonwebtoken";

export async function verifyregisteruser(req,res,next)
{

const {email,mobileNumber}=req.body;
console.log(req.body)

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


export async function verifytoken(req,res,next)

{
   
    const header=req.headers.authorization;
    if(!header)
    {
        return res.status(401).json({message:"Login first"})
    }

    const token=header.split(" ")[1];
   

    try{

    jwt.verify(token,'SEARCHED_USER', 
        function(err, decoded) {
            
        console.log(decoded) // bar
});
        next();

    }

    catch(err)
    {
        return res.status(500).json({message:"internal server error"})
    }





}