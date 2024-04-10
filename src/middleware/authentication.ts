import { Authorization } from "../authentication/authentication";
import { Response, Request } from "express";
import { UserAuthorization } from "../authentication/userAuthentication";

export const isAdmin = async (req: Request, res: Response, next: Function) => {
    try {
        await Authorization(req, res, next); 
    } catch (error: any) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};

export const isLoggedIn = async (req: Request, res: Response, next: Function) => {
    try {
        await UserAuthorization(req, res, next); 
    } catch (error: any) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};