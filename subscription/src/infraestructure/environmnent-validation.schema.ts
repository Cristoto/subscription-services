import * as Joi from 'joi';

export class EnvironmentValidationSchema {
  public static validate(): Joi.ObjectSchema {
    return Joi.object({
      MONGO_CONNECTION: Joi.string().uri().required(),
      KAFKA_PORT: Joi.number().required(),
      KAFKA_URL: Joi.string().required(),
      KAFKA_GROUPID: Joi.string().required(),
      KAFKA_CLIENTID: Joi.string().required(),
    });
  }
}
