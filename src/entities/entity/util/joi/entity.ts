import joi from 'joi';

export const joi_name = joi.string();
export const joi_entity_optional = joi.object({ name: joi_name.optional() });
const joi_entity = joi.object({ name: joi_name.required() });
export default joi_entity;