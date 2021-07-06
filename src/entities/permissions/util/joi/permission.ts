import joi from 'joi';

export const joi_role = joi.string();
export const joi_entity = joi.string();
export const joi_create = joi.boolean();
export const joi_update = joi.boolean();
export const joi_remove = joi.boolean();
export const joi_read = joi.boolean();
export const joi_permission_optional = joi.object({
    role: joi_role.optional(),
    entity: joi_entity.optional(),
    create: joi_create.optional(),
    update: joi_update.optional(),
    remove: joi_remove.optional(),
    read: joi_read.optional(),
});
const joi_permission = joi.object({
    role: joi_role.required(),
    entity: joi_entity.required(),
    create: joi_create.required(),
    update: joi_update.required(),
    remove: joi_remove.required(),
    read: joi_read.required(),
});
export default joi_permission;