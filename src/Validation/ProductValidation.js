const Joi = require('joi');

const productValidation = (data) => {
	const productSchema = Joi.object({
		ownerID: Joi.string().alphanum().min(24).required(),
		productName: Joi.string().required(),
		productPrice: Joi.number().required(),
		productDiscription: Joi.string().required(),
		rating: Joi.number(),
		smallImage: Joi.string().uri().required(),
		largeImage: Joi.string().uri(),
	});

	return productSchema.validate(data);
};

module.exports.productValidation = productValidation;
