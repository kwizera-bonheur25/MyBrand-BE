import Joi from "joi";

const blogSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required()
});

export const validateBlog = (blogData: any) => {

    return blogSchema.validate(blogData);
};
