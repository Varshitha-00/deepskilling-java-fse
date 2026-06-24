public class MobileApp implements Observer
{
    public void update(double price)
    {
        System.out.println("Mobile App Updated: Stock Price = " + price);
    }
}