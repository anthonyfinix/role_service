import Joi from "joi";

const joi_get_query = Joi.object({
    role:Joi.string().required()
}).required()

export default joi_get_query;