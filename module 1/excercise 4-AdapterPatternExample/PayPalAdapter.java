class PayPalAdapter implements PaymentProcessor
{
    private PayPalGateway paypal;

    public PayPalAdapter(PayPalGateway paypal)
    {
        this.paypal = paypal;
    }

    public void processPayment(double amount)
    {
        paypal.sendPayment(amount);
    }
}

class StripeAdapter implements PaymentProcessor
{
    private StripeGateway stripe;

    public StripeAdapter(StripeGateway stripe)
    {
        this.stripe = stripe;
    }

    public void processPayment(double amount)
    {
        stripe.makePayment(amount);
    }
}