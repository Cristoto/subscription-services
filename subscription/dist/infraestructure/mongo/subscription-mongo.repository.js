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
exports.SubscriptionMongoRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const subscription_schema_1 = require("./subscription.schema");
let SubscriptionMongoRepository = class SubscriptionMongoRepository {
    constructor(subscriptionModel) {
        this.subscriptionModel = subscriptionModel;
    }
    async create(subscription) {
        const { id, email, newsletterIds } = subscription;
        const userWithEmail = await this.subscriptionModel
            .findOne({
            email,
        })
            .exec();
        if (!userWithEmail) {
            this.subscriptionModel.create(subscription);
            return id;
        }
        if (userWithEmail.newsletterIds.includes(newsletterIds[0])) {
            throw new common_1.HttpException('Email already exist in this newsletter', common_1.HttpStatus.BAD_REQUEST);
        }
        this.subscriptionModel.updateOne({ email }, {
            newsletterIds: [...userWithEmail.newsletterIds, ...newsletterIds],
        });
        return id;
    }
    remove(id) {
        throw new Error('Method not implemented.');
    }
    async get(id) {
        const subscription = await this.subscriptionModel.findOne({ id }).exec();
        if (!subscription)
            return undefined;
        const { email, firstName, gender, newsletterIds, dateOfBirth, consent } = subscription;
        return {
            id,
            consent,
            dateOfBirth,
            email,
            newsletterIds,
            firstName,
            gender,
        };
    }
    async getAll() {
        const subscriptions = await this.subscriptionModel.find().exec();
        return subscriptions.map((subscription) => {
            const { id, email, firstName, gender, newsletterIds, dateOfBirth, consent, } = subscription;
            return {
                id,
                consent,
                dateOfBirth,
                email,
                newsletterIds,
                firstName,
                gender,
            };
        });
    }
};
SubscriptionMongoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subscription_schema_1.Subscription.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubscriptionMongoRepository);
exports.SubscriptionMongoRepository = SubscriptionMongoRepository;
//# sourceMappingURL=subscription-mongo.repository.js.map