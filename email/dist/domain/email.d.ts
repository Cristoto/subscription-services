export declare class Email {
    to: string;
    from: string;
    subject?: string;
    template: string;
    constructor(to: string, from: string, template: string, subject?: string);
}
