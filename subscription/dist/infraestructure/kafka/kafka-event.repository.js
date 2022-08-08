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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaEventRepository = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let KafkaEventRepository = class KafkaEventRepository {
    publish(subscription) {
        this.client.send('send.email', subscription);
    }
};
__decorate([
    (0, microservices_1.Client)({
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                clientId: process.env.KAFKA_CLIENTID,
                brokers: [`${process.env.KAFKA_URL}:${process.env.KAFKA_PORT}`],
            },
            consumer: {
                groupId: process.env.KAFKA_GROUPID,
            },
        },
    }),
    __metadata("design:type", microservices_1.ClientKafka)
], KafkaEventRepository.prototype, "client", void 0);
KafkaEventRepository = __decorate([
    (0, common_1.Injectable)()
], KafkaEventRepository);
exports.KafkaEventRepository = KafkaEventRepository;
//# sourceMappingURL=kafka-event.repository.js.map