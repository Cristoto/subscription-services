"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentValidationSchema = void 0;
const Joi = require("joi");
class EnvironmentValidationSchema {
    static validate() {
        return Joi.object({
            MONGO_CONNECTION: Joi.string().uri().required(),
            KAFKA_PORT: Joi.number().required(),
            KAFKA_URL: Joi.string().required(),
            KAFKA_GROUPID: Joi.string().required(),
            KAFKA_CLIENTID: Joi.string().required(),
        });
    }
}
exports.EnvironmentValidationSchema = EnvironmentValidationSchema;
//# sourceMappingURL=environmnent-validation.schema.js.map