import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error";
import createRole from "../services/createRole";

export default async (req: Request, res: Response, next: NextFunction)=>{
    let { error, result, message } = await createRole(req.body);
    if (error) next(new InternalError({ message: <string>error.message, details: [error] }));
    return res.json({ result, message });
}