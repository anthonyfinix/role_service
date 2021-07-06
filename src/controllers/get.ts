import { NextFunction, Request, Response } from "express";
import getRole from "../services/getRole";

export default async (req: Request, res: Response, next: NextFunction) => {
    let { error, result, message } = await getRole(req.query);
    if (error) return next(error)
    res.json({ result, message });
}