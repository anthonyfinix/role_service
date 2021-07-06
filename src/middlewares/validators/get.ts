import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../util/error";
import joi_get_query from "../../util/joi/joi_get";

export default (req: Request, res: Response, next: NextFunction) => {
    let queryValidation = joi_get_query.validate(req.query);
    if (queryValidation.error) return next(new BadRequest({ message: queryValidation.error.message, details: [queryValidation.error.details] }));
    return next()
}