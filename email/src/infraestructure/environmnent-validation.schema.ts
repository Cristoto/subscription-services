import * as Joi from 'joi';

export class EnvironmentValidationSchema {
  public static validate(): Joi.ObjectSchema {
    return Joi.object({
      KAFKA_PORT: Joi.number().required(),
      KAFKA_URL: Joi.string().required(),
      KAFKA_GROUPID: Joi.string().required(),
      MAIL_FROM: Joi.string().required(),
    });
  }
}
