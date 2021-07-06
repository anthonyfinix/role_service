import { NextFunction, Request, Response } from "express";
import createRole from "../services/createRole";

export default async (req: Request, res: Response, next: NextFunction) => {
    let { error, result, message } = await createRole(req.body);
    if (error) return next(error)
    res.json({result, message});
}