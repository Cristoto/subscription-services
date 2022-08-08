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
exports.EmailServiceController = void 0;
const common_1 = require("@nestjs/common");
const email_service_service_1 = require("./email-service.service");
const microservices_1 = require("@nestjs/microservices");
let EmailServiceController = class EmailServiceController {
    constructor(emailServiceService) {
        this.emailServiceService = emailServiceService;
    }
    confirm(message) {
        console.log(message);
        const { value } = message;
        console.log(value);
        this.emailServiceService.sendMail(value);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('send.email'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmailServiceController.prototype, "confirm", null);
EmailServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [email_service_service_1.EmailServiceService])
], EmailServiceController);
exports.EmailServiceController = EmailServiceController;
//# sourceMappingURL=email-service.controller.js.map