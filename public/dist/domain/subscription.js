"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
const subscription_email_1 = require("./subscription-email");
class Subscription {
    constructor(params) {
        const { email, consent, dateOfBirth, newsletterId, firstName, gender, id } = params;
        const subscriptionEmail = new subscription_email_1.SubscriptionEmail(email);
        this.email = subscriptionEmail.get();
        this.firstName = firstName;
        this.consent = consent;
        this.dateOfBirth = dateOfBirth;
        this.newsletterId = newsletterId;
        this.gender = gender;
        this.id = id;
    }
}
exports.Subscription = Subscription;
//# sourceMappingURL=subscription.js.map