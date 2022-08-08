"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicServiceModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_api_repository_1 = require("./infraestructure/subscription-api.repository");
const symbols_1 = require("./infraestructure/symbols");
const public_service_controller_1 = require("./public-service.controller");
const public_service_service_1 = require("./public-service.service");
const throttler_1 = require("@nestjs/throttler");
const config_1 = require("@nestjs/config");
const environmnent_validation_schema_1 = require("./infraestructure/environmnent-validation.schema");
let PublicServiceModule = class PublicServiceModule {
};
PublicServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                validationSchema: environmnent_validation_schema_1.EnvironmentValidationSchema.validate(),
            }),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
        ],
        controllers: [public_service_controller_1.PublicServiceController],
        providers: [
            public_service_service_1.PublicServiceService,
            {
                provide: symbols_1.SubscriptionRepositorySymbol,
                useClass: subscription_api_repository_1.SubscriptionApiRepository,
            },
        ],
    })
], PublicServiceModule);
exports.PublicServiceModule = PublicServiceModule;
//# sourceMappingURL=public-service.module.js.map