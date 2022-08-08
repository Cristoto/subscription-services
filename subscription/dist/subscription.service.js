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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const subscription_1 = require("./domain/subscription");
const uuid_1 = require("uuid");
const symbols_1 = require("./infraestructure/symbols");
const kafka_event_repository_1 = require("./infraestructure/kafka/kafka-event.repository");
let SubscriptionService = class SubscriptionService {
    constructor(subscriptionRepository, eventRepository) {
        this.subscriptionRepository = subscriptionRepository;
        this.eventRepository = eventRepository;
    }
    async create(params) {
        const { consent, dateOfBirth, email, newsletterId, firstName, gender } = params;
        const subscription = new subscription_1.Subscription({
            consent,
            dateOfBirth,
            email,
            newsletterIds: [newsletterId],
            firstName,
            gender,
            id: (0, uuid_1.v4)(),
        });
        const id = await this.subscriptionRepository.create(subscription);
        this.eventRepository.publish(subscription);
        return id;
    }
    cancel(id) {
        throw Error('Impelemt');
    }
    async get(subscriptionId) {
        return this.subscriptionRepository.get(subscriptionId);
    }
    async getAll() {
        return this.subscriptionRepository.getAll();
    }
};
SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(symbols_1.SubscriptionRepositorySymbol)),
    __param(1, (0, common_1.Inject)(symbols_1.EventRepositorySymbol)),
    __metadata("design:paramtypes", [Object, kafka_event_repository_1.KafkaEventRepository])
], SubscriptionService);
exports.SubscriptionService = SubscriptionService;
//# sourceMappingURL=subscription.service.js.map