import * as Joi from "joi";


export const createProductSchema = Joi.object({
  name: Joi.string().required().min(3).max(5),
  price: Joi.number().required(),
  brand: Joi.string().required(),
});
