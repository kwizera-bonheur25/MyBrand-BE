import {Response, Request} from 'express'
import Comments from "../models/comment"
import Blogs from '../models/Blog';

export const newComment = async(req:Request, res:Response) => {
    try{
        const authorId = (req as any).users._id;
        const id = req.params.id;
    const checkPost = await Blogs.findById(id);
    if(!checkPost){
        return res.status(404).json({
            status:404,
            message:"Blog not found"
        })
    }

    const newComment = await Comments.create({
        blogId:id,
        content:req.body.content,
        author:authorId
    })

    const updateBlog = await Blogs.findByIdAndUpdate(id,{
        $push: {comments: newComment._id}
    },{new:true});

    return res.status(201).json({
        status:201,
        message:"Comment added successfully",
        data:newComment
    }) 
    } catch(error){
        res.status(404).json({
            status:404,
            message:"Failed to add Blog",
            error:error
        })
    }
}

export const deleteComment = async(req:Request,res:Response) => {
    try{
        const checkComment = await Comments.findById(req.params.id)
        if(!checkComment){
            return res.status(404).json({
                status:404,
                message: "Comment not found"
            });
        }
        const deletedone = await Comments.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status:204,
            message: "Comment deleted successfully"
        });
    } catch(error:any){
        return res.status(500).json({
            status:500,
            message:"Internal server error",
            error: error.message
        })
    }
}

export const getAllComments = async (req: Request, res: Response) => {
    const comments = await Comments.find()
    res.status(200).json({
        status: 200,
        message: "Data retrieved successfully",
        data: comments
    })
}