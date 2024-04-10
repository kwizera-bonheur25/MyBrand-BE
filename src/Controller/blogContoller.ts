import express, { Request, Response } from 'express';
import Blogs from "../models/Blog"
import { uploadToCloud } from '../helper/cloud';
import { any } from 'joi';
import { title } from 'process';

export const getAllBlogs = async (req: Request, res: Response) => {
    const blogs = await Blogs.find()
    .populate({ path: 'comments',  populate:{ path: 'author', select: 'firstname lastname profile' }})
    .populate({ path: 'likes' })
    .populate({ path: 'author', select: 'firstname lastname profile' });
    res.status(200).json({
        status: 200,
        message: "Data retrieved successfully",
        data: blogs
    })
}

export const getSingleBlog = async (req: Request, res: Response) => {
    try {
        const Blog = await Blogs.findOne({ _id: req.params.id })
        .populate({ path: 'comments', populate:{ path: 'author', select: 'firstname lastname profile' } })
        .populate({ path: 'likes' }).populate({ path: 'author' , select: 'firstname lastname profile'});
        if(!Blog) {
            return res.status(404).json({
                status: 404,
                message:"Blog not found"
            })
        }
        res.status(200).json({
            status: 200,
            message: "Data retrieved successfully",
            data: Blog
        })
    } catch {
        return res.status(500).json({
            status: 500,
            message:"Retrieve data failled",
            error: "Blog doesn't exist!"
        })
    }
}

export const addNewBlog = async (req: Request, res: Response) => {
    try {

        const { title, content } = req.body;
        const authorId = (req as any).users._id;


        const existingTitle = await Blogs.findOne({ title: title });

        if (!req.file) {
            return res.status(400).json({
                status: 400,
                message: "Image file is required"
            });
        }

    if (existingTitle) {
        return res.status(409).json({
            status: 409,
            message:"The title already exist"
        })
    }
    

        let result:any;
        if (req.file) result = await uploadToCloud(req.file, res)

        const makeBlog = await Blogs.create({ title, content, image:result?.secure_url,author:authorId})
        return res.status(201).json({
            status: "201",
            message: " Blog Create Successfully",
            data: makeBlog
        })
    } catch (error: any) {
        return res.status(500).json({
            status: "500",
            message: "Failed To Create Blog",
            error: error.message
        })

    }
}

export const updateBlog = async (req: Request, res: Response) => {
    try {

        const {id} = req.params;

        const {title,content} = req.body;

        const Blog = await Blogs.findById(id);

        if (!Blog) {
            return res.status(400).json({
                status: 400,
                message: "Blog does not found"
            })
        }

        const checkTitle = await Blogs.findOne({ title: title});

    //     if(checkTitle){

    //     if(checkTitle._id == Blog._id){
    //         return res.status(409).json({
    //             status:409,
    //             message:"Title already exist try other"
    //         })
    //     }
    // }

        let result:any;
        if(req.file) result = await uploadToCloud(req.file,res)

        const updateData = await Blogs.findByIdAndUpdate(id,{ title, content, image:result?.secure_url},{new:true})
        return res.status(201).json({
            status: 201,
            message:"Data updated successfully",
            data:updateData
            
        })
    } catch(error:any) {
        return res.status(500).json({
            status:500,
            message:"Fail to update blog",
            error:error.message
        })
    }
}

export const deleteBlog = async (req: Request, res: Response) => {
    try {

        const {id} = req.params

        const checkId = await Blogs.findById(id);
        
        if(!checkId){
            return res.status(409).json({
                status:409,
                message:"Blog to be deleted not found try other"
            })
        }

        const deletedData = await Blogs.findByIdAndDelete(id);

        return res.status(200).json({
            status:200,
            message:"Data deleted successfully",
        })
    } catch(error:any) {
        return res.status(500).json({
            status:500,
            message:"Internal server error",
            error:error.message
        })
    }
}