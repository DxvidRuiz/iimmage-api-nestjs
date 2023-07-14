import * as Joi from "joi";



export const updateProductSchema = Joi.object({
  name: Joi.string().min(3).max(5),
  price: Joi.number(),
  brand: Joi.string()
});

