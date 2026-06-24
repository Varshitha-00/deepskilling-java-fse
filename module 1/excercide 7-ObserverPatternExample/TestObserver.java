public class TestObserver
{
    public static void main(String[] args)
    {
        StockMarket stockMarket = new StockMarket();

        Observer mobileApp = new MobileApp();

        Observer webApp = new WebApp();

        stockMarket.registerObserver(mobileApp);

        stockMarket.registerObserver(webApp);

        stockMarket.setStockPrice(2500.50);

        System.out.println();

        stockMarket.setStockPrice(2750.75);
    }
}