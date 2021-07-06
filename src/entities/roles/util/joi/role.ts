import joi from 'joi';

export const joi_name = joi.string();
export const joi_permission_id = joi.string();
export const joi_role_optional = joi.object({ name: joi_name.optional() });
const joi_role = joi.object({
    name: joi_name.required(),
});
export default joi_role;