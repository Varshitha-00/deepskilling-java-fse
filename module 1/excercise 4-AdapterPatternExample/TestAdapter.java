public class TestAdapter
{
    public static void main(String[] args)
    {
        PaymentProcessor paypal =
                new PayPalAdapter(new PayPalGateway());

        paypal.processPayment(10000);

        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        stripe.processPayment(6700);
    }
}