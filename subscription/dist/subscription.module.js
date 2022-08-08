"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const subscription_service_1 = require("./subscription.service");
const subscription_controller_1 = require("./subscription.controller");
const mongoose_1 = require("@nestjs/mongoose");
const subscription_schema_1 = require("./infraestructure/mongo/subscription.schema");
const symbols_1 = require("./infraestructure/symbols");
const subscription_mongo_repository_1 = require("./infraestructure/mongo/subscription-mongo.repository");
const config_1 = require("@nestjs/config");
const environmnent_validation_schema_1 = require("./infraestructure/environmnent-validation.schema");
const kafka_event_repository_1 = require("./infraestructure/kafka/kafka-event.repository");
let SubscriptionModule = class SubscriptionModule {
};
SubscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                validationSchema: environmnent_validation_schema_1.EnvironmentValidationSchema.validate(),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    uri: config.get('MONGO_CONNECTION'),
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }),
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: subscription_schema_1.Subscription.name, schema: subscription_schema_1.SubscriptionSchema },
            ]),
        ],
        controllers: [subscription_controller_1.SubscriptionController],
        providers: [
            subscription_service_1.SubscriptionService,
            {
                provide: symbols_1.SubscriptionRepositorySymbol,
                useClass: subscription_mongo_repository_1.SubscriptionMongoRepository,
            },
            {
                provide: symbols_1.EventRepositorySymbol,
                useClass: kafka_event_repository_1.KafkaEventRepository,
            },
        ],
    })
], SubscriptionModule);
exports.SubscriptionModule = SubscriptionModule;
//# sourceMappingURL=subscription.module.js.map