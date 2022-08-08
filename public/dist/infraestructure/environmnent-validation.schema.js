"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentValidationSchema = void 0;
const Joi = require("joi");
class EnvironmentValidationSchema {
    static validate() {
        return Joi.object({
            SUBSCRIPTION_API_URL: Joi.string().uri().required(),
        });
    }
}
exports.EnvironmentValidationSchema = EnvironmentValidationSchema;
//# sourceMappingURL=environmnent-validation.schema.js.map