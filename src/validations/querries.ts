import Joi from "joi";

const querySchema = Joi.object({
  email: Joi.string().email().required(),
  message: Joi.string().required()
});

export const validateQuery = (queryData: any) => {

    return querySchema.validate(queryData);
};