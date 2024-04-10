import Joi from "joi";

const userSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password:Joi.string()
    .required()
    .min(8) 
    .max(30) 
    .message('Password must be between 8 and 30 characters long and contain only letters and numbers')
})

export const validateUser = (userData:any) => {
    return userSchema.validate(userData)
}