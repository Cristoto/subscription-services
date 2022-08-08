"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
const email_validator_1 = require("./email-validator");
class Email {
    constructor(to, from, template, subject) {
        this.to = new email_validator_1.EmailValidator(to).get();
        this.from = new email_validator_1.EmailValidator(from).get();
        this.subject = subject;
        this.template = template;
    }
}
exports.Email = Email;
//# sourceMappingURL=email.js.map