import Jwt from "jsonwebtoken";
import Users from "../models/users";
import { Request, Response } from "express";

export const UserAuthorization = async (req:Request,res:Response,next:any) => {
    let token;
    try{
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token) {
            return res.status(401).json({
                status: "401",
                message: "You Are Not Logged In Please login",
              });
        }
        const secret = process.env.JWT_SECRET as string;
        const decoded =  Jwt.verify(String(token), secret) as any;


        if(decoded.err){
            return res.status(403).json({
                status: "403",
                message: "you are not authorized",
              });
        }

        const logedUser = await Users.findById(decoded._id);

        if (!logedUser) {
            return res.status(403).json({
              status: "403",
              message: "you are not authorized",
            });
        } else {
            (req as any).users  = logedUser;
            next()
        }
    } catch (error:any) {
        return res.status(403).json({
        status: "403",
        error: error.message
        });
    }
}