import { NextFunction, Request, Response } from "express";
import { InternalError } from "../../../util/error";
import { EntityInterface } from "../models/entity";
import getEntities from "../services/getEntities";

export default async (req: Request, res: Response, next: NextFunction) => {
    let { error, result, message } = await getEntities(<EntityInterface><unknown>req.query);
    if (error) next(new InternalError({ message: error.message }))
    return res.json({ result, message })
}