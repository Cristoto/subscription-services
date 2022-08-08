"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const email_service_module_1 = require("./email-service.module");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(email_service_module_1.EmailServiceModule, {
        transport: microservices_1.Transport.KAFKA,
        options: {
            client: {
                brokers: [`${process.env.KAFKA_URL}:${process.env.KAFKA_PORT}`],
            },
            consumer: {
                groupId: process.env.KAFKA_GROUPID,
            },
        },
    });
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map