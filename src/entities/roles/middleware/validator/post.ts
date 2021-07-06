import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error";
import joi_role from "../../util/joi/role";

export default (req: Request, res: Response, next: NextFunction) => {
    let role_validation = joi_role.validate(req.body)
    if (role_validation.error) next(new BadRequest({ message: role_validation.error.message, details: [role_validation.error.details] }));
    next();
}