public class WebApp implements Observer
{
    public void update(double price)
    {
        System.out.println("Web App Updated: Stock Price = " + price);
    }
}