import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error";
import joi_permission from "../../util/joi/permission";

export default (req: Request, res: Response, next: NextFunction) => {
    let permission_validation = joi_permission.validate(req.body)
    if (permission_validation.error) next(new BadRequest({ message: permission_validation.error.message, details: [permission_validation.error.details] }));
    next();
}