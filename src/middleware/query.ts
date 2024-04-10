import { validateQuery } from "../validations/querries";
import { Response, Request } from "express";

export const isValid =  (req: Request, res: Response, next: any) => {
    try {
        const { error } = validateQuery(req.body); 
        if (error) {
            return res.status(400).json({
                status: 400,
                message: error.details[0].message
            });
        }
        next();
    } catch (error: any) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};
