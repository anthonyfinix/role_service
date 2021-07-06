import joi from 'joi';
export const joi_role_name = joi.string();
export const joi_entity_name = joi.string();
export const entity = joi.object({
    name: joi_entity_name.required(),
    permissions: joi.object({
        read: joi.boolean(),
        create: joi.boolean(),
        delete: joi.boolean(),
        update: joi.boolean(),
    }).required()
})
const joi_role = joi.object({
    role: joi_role_name.required(),
    entities: joi.array().items(entity).min(1).required()
})

export default joi_role;