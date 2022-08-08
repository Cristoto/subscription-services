export class SubscriptionEmail {
  private email: string;
  constructor(email: string) {
    if (!this.validateEmail(email)) {
      throw new Error('Invalid email');
    }

    this.email = email;
  }

  private validateEmail(email: string): boolean {
    const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
    return regex.test(email);
  }

  public get(): string {
    return this.email;
  }
}
