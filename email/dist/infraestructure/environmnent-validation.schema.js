"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentValidationSchema = void 0;
const Joi = require("joi");
class EnvironmentValidationSchema {
    static validate() {
        return Joi.object({
            KAFKA_PORT: Joi.number().required(),
            KAFKA_URL: Joi.string().required(),
            KAFKA_GROUPID: Joi.string().required(),
            MAIL_FROM: Joi.string().required(),
        });
    }
}
exports.EnvironmentValidationSchema = EnvironmentValidationSchema;
//# sourceMappingURL=environmnent-validation.schema.js.map