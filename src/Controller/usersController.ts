import Users from "../models/users";
import { Request, Response } from "express";
import bcrypt, { hash} from "bcrypt";
import jwt from "jsonwebtoken";

export const addNewUser = async (req:Request,res:Response) => {
    try{

        const checkEmail = await Users.findOne({email:req.body.email});
        if(checkEmail){
            return res.status(409).json({
                status: 409,
                message:"Email address already exist try new one"
            })
        }
        const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
        const createdUser = await Users.create({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:hashedPass
        });
        return res.status(201).json({
         status: 201,
         message: "User created successfully",
        });
    } catch (error:any) {
        return res.status(500).json({
        status: 500,
         message: "Data does not added",
        error:error.message
    })
    }
}

export const getAllUsers = async (req:Request,res:Response) => {
    try{
        const users = await Users.find();
    return res.status(200).json({
        status:200,
        message:"Users retrieved successfully",
        data:users
    })
    } catch(error){
        return res.status(500).json({
            status:500,
            message:"Internal server error",
            error:error
        })
    }
}

export const usersLogin = async (req:Request,res:Response) =>{
    try{
        const loggedUser = await Users.findOne({email:req.body.email});
        console.log(loggedUser)
        if(!loggedUser){
            return res.status(404).json({
                status: "404",
                message: "User Not Found",
            });
        }
        if(!loggedUser || loggedUser.password === null || loggedUser.password === undefined){
            return res.status(404).json({
                status : "404",
                message: "Incorrect email or password yeeyye"
            });
        } else{
            const isMatch = await bcrypt.compare(req.body.password,loggedUser.password);
            if(!isMatch){
                return res.status(404).json({
                    status : "404",
                    message: "Incorrect email or password "
                });
            }
        }
        
        const token = await jwt.sign(
            {_id:loggedUser},"qwertyuiop",{expiresIn: process.env.EXPIRE_DATE}
        )
        return res.status(200).json({
            status: "200",
            data: {
            role: loggedUser.role,
            firstname: loggedUser.firstname,
            lastname: loggedUser.lastname,
            profile: loggedUser.profile,
            token: token
            }
        });
    } catch(error:any){
        return res.status(500).json({
            status:500,
            message:"Internal server error",
            error:error.message
        })
    }
}

