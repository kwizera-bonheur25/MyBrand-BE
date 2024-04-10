import Blogs from "../models/Blog";
import { Request, Response } from "express";
import Like from "../models/like";

interface extendRequest <T=Record<string,any>> extends Request <T> {
    users?:any
}

export const likes = async (req:extendRequest ,res:Response) => {
    try{
        const {id} = req.params;
        const authorId  = req.users._id;

        const checkBlog = await Blogs.findById(id);
        if(!checkBlog){
            return res.status(404).json({
                status: 404,
                message:"Blog not found"
            })
        }
        const checkLike = await Like.findOne({author:authorId});

        if(checkLike){
            const deleteLike = await Like.findByIdAndDelete(checkLike._id);
            return res.status(201).json({
                status: 201,
                message:"Like removed successfully",
            }) 
        } else {
            const addLike = await Like.create({
                author: authorId,
                blogId: id
            })
            const updateBlog = await Blogs.findByIdAndUpdate(id, {
                $push: {likes : addLike._id}
            })
            return res.status(201).json({
                status : 201,
                message: "Like added successfully",
                data:addLike
            })
        }
    } catch(error:any){
        return res.status(500).json({
            status: 500,
            message:"Internal server error",
            error:error.message
        })
    }
}

export const getAllLikes = async (req: Request, res: Response) => {
    try{
        const likes = await Like.find()
    res.status(200).json({
        status: 200,
        message: "Likes retrieved successfully",
        data: likes
    })
    } catch(error:any){
        return res.status(500).json({
            status: 500,
            message:"Internal server error",
            error:error.message
        })
    }
}