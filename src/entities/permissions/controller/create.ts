import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error";
import createPermission from "../services/createPermission";

export default async (req: Request, res: Response, next: NextFunction)=>{
    let { error, result, message } = await createPermission(req.body);
    if (error) next(new InternalError({ message: <string>error.message, details: [error] }));
    return res.json({ result, message });
}