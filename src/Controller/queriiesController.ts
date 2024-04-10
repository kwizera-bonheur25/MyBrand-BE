import express, {Request,Response} from 'express';
import Blogs from "../models/Blog"
import Querries from '../models/Qurries';

export const getAllQuerries = async(req:Request,res:Response) =>{
    const Query = await Querries.find()
    res.status(200).json({
        status:200,
        message:"Data retrieved successfully",
        data:Query
    })
}

export const getSingleQuery = async(req:Request,res:Response) => {
    try{
    const Query = await Querries.findOne({_id:req.params.id});
    if(!Query){
        return res.status(409).json({
            message:"Query not found"
        })
    }
    return res.status(200).json({
        status:200,
        message:"Data retrieved successfully",
        data:Query
    })
} catch{
    res.status(404)
    res.send({ error: "Blog doesn't exist!" })
}
}

export const addNewQuery = async(req:Request,res:Response) => {
    const Query = new Querries({
        email:req.body.email,
        message:req.body.message
    })
    await Query.save()
    res.status(201).json({
        status:201,
        message:"Message sent successfully",
        data:Query
    })
}


export const deleteQuery = async(req:Request,res:Response) => {
    try{
        const deletedQuery = await Querries.findById(req.params.id);
        if(!deletedQuery){
            return res.status(409).json({
                status : 409,
                message:"Query not found"
            })
        }
        await Querries.deleteOne({_id:req.params.id});
        
        res.status(204)
        return res.status(200).json({
            status:200,
            message:"Data deleted successfully"
        });
    } catch{
        res.status(404)
        res.send({error:"Query does not exist"})
    }
}