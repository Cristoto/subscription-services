"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSubscriptionDto = void 0;
const openapi = require("@nestjs/swagger");
class ResponseSubscriptionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, email: { required: true, type: () => String }, firstName: { required: false, type: () => String }, gender: { required: false, type: () => String }, dateOfBirth: { required: true, type: () => Date }, consent: { required: true, type: () => Boolean }, newsletterIds: { required: true, type: () => [String] } };
    }
}
exports.ResponseSubscriptionDto = ResponseSubscriptionDto;
//# sourceMappingURL=response-subscription.dto.js.map