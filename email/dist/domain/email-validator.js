"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
class EmailValidator {
    constructor(email) {
        if (!this.validateEmail(email)) {
            throw new Error('Invalid email');
        }
        this.email = email;
    }
    validateEmail(email) {
        const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        return regex.test(email);
    }
    get() {
        return this.email;
    }
}
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email-validator.js.map