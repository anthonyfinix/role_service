import { NextFunction, Request, Response } from "express";
import { BadRequest } from "../../../../util/error";
import joi_entity from "../../util/joi/entity";

export default (req: Request, res: Response, next: NextFunction) => {
    let entity_validation = joi_entity.validate(req.body)
    if (entity_validation.error) next(new BadRequest({ message: entity_validation.error.message, details: [entity_validation.error.details] }));
    next();
}