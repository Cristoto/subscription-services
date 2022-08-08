import * as Joi from 'joi';

export class EnvironmentValidationSchema {
  public static validate(): Joi.ObjectSchema {
    return Joi.object({
      SUBSCRIPTION_API_URL: Joi.string().uri().required(),
      API_KEY: Joi.string().required(),
    });
  }
}
