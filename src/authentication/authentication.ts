import Jwt from "jsonwebtoken";
import Users from "../models/users";
import { Request, Response } from "express";

export const Authorization = async (req:Request,res:Response,next:any) => {
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
        }

        if(logedUser?.role !== 'admin') {
            return res.status(404).json({
                status: '404',
                message: 'Only Admin User can do this operation'
            })
        } else {
            (req as any).users  = logedUser;
            next()
        }
    } catch (error:any) {
        return res.status(403).json({
        status: "403",
        error: "You are not authorized"
        });
    }
}