"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicServiceController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const subscription_dto_1 = require("./infraestructure/subscription.dto");
const public_service_service_1 = require("./public-service.service");
let PublicServiceController = class PublicServiceController {
    constructor(publicServiceService) {
        this.publicServiceService = publicServiceService;
    }
    subscription(subscriptionDto) {
        const { consent, dateOfBirth, email, newsletterId, firstName, gender } = subscriptionDto;
        return this.publicServiceService.createSubscription({
            consent,
            dateOfBirth,
            email,
            newsletterId,
            firstName,
            gender,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [subscription_dto_1.SubscriptionDto]),
    __metadata("design:returntype", Promise)
], PublicServiceController.prototype, "subscription", null);
PublicServiceController = __decorate([
    (0, swagger_1.ApiTags)('subscriptions'),
    (0, common_1.Controller)('subscription'),
    __metadata("design:paramtypes", [public_service_service_1.PublicServiceService])
], PublicServiceController);
exports.PublicServiceController = PublicServiceController;
//# sourceMappingURL=public-service.controller.js.map