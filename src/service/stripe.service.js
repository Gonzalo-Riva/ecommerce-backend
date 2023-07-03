const { default: Stripe } = require('stripe');

class StripeService {
    constructor() {
        this.stripe = new Stripe('sk_test_51NPVbOAxxODsKhcP6vMfEAmJHf2PWkupi7Df3xSQoROVPMugbxpwmYxDNv5lwB92E7II7QfgWl9yLfCNNgBBxrAE00nS76bKz0');
    }
    createPaymentIntents(data) {
        return this.stripe.paymentIntents.create(data);
    }
}
module.exports = new StripeService();