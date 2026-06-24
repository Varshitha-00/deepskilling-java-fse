import java.util.Arrays;
import java.util.Comparator;

public class SearchTest
{
    public static Product linearSearch(Product[] products,
                                       int productId)
    {
        for(Product product : products)
        {
            if(product.getProductId() == productId)
            {
                return product;
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products,
                                       int productId)
    {
        int left = 0;
        int right = products.length - 1;

        while(left <= right)
        {
            int mid = (left + right) / 2;

            if(products[mid].getProductId() == productId)
            {
                return products[mid];
            }
            else if(products[mid].getProductId() < productId)
            {
                left = mid + 1;
            }
            else
            {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args)
    {
        Product[] products =
        {
            new Product(103,
                        "Laptop",
                        "Electronics"),

            new Product(101,
                        "Mobile",
                        "Electronics"),

            new Product(105,
                        "Shoes",
                        "Fashion"),

            new Product(102,
                        "Watch",
                        "Accessories")
        };

        System.out.println("Linear Search");

        Product result1 =
                linearSearch(products,
                             105);

        if(result1 != null)
        {
            System.out.println(result1);
        }

        Arrays.sort(products,
                Comparator.comparingInt(
                        Product::getProductId));

        System.out.println();

        System.out.println("Binary Search");

        Product result2 =
                binarySearch(products,
                             105);

        if(result2 != null)
        {
            System.out.println(result2);
        }
    }
}