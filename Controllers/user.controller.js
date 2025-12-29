import userModel from "../Models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


export async function userRegister(req,res)
{

        const {firstName,middleName,lastName,email,mobileNumber,password}=req.body;

        try{
            const registeruser=await userModel.create({
                firstName,
                middleName,
                lastName,
                email,
                mobileNumber,
                password:bcrypt.hashSync(password,10)
            })

            return res.status(201).json({message:"User registered successfully"});
        }
        catch(err)
        {
            return res.status(500).json({"mesage":err.message});
        }



}


export async function userLogin(req,res)
{
        const {email,password}=req.body;
    

        try{
            const searcheduser=await userModel.findOne({email})
            if(!searcheduser)
            {
                return res.status(404).json({message:"Invalid email"})
            }

            else{

                bcrypt.compare(password, searcheduser.password, function(err, result) {
                    

                    if(err)
                            {
                                return res.status(500).json({message:"internal server error"})
                            }


                            if(!result)
                            {
                                return res.status(401).json({message:"invalid password"})
                            }


                           const token= jwt.sign(searcheduser.email, 'SEARCHED_USER');

                            return res.status(200).json({message:"welcome user",token})
                 


                    });

            }

        }
        catch(err)
        {
            return res.status(500).json({"internal server error":err.message})
        }


}