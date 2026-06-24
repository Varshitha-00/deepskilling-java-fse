import java.util.HashMap;

public class InventoryManagement
{
    private HashMap<Integer, Product> inventory =
            new HashMap<>();

    public void addProduct(Product product)
    {
        inventory.put(product.getProductId(),
                      product);

        System.out.println("Product Added");
    }

    public void updateProduct(int productId,
                              int quantity,
                              double price)
    {
        Product product =
                inventory.get(productId);

        if(product != null)
        {
            product.setQuantity(quantity);
            product.setPrice(price);

            System.out.println("Product Updated");
        }
        else
        {
            System.out.println("Product Not Found");
        }
    }

    public void deleteProduct(int productId)
    {
        if(inventory.remove(productId) != null)
        {
            System.out.println("Product Deleted");
        }
        else
        {
            System.out.println("Product Not Found");
        }
    }

    public void displayProducts()
    {
        for(Product product : inventory.values())
        {
            System.out.println(product);
        }
    }

    public static void main(String[] args)
    {
        InventoryManagement inventory =
                new InventoryManagement();

        Product p1 =
                new Product(101,
                            "Laptop",
                            10,
                            50000);

        Product p2 =
                new Product(102,
                            "Mouse",
                            50,
                            500);

        inventory.addProduct(p1);
        inventory.addProduct(p2);

        System.out.println();

        inventory.displayProducts();

        System.out.println();

        inventory.updateProduct(101,
                                15,
                                52000);

        System.out.println();

        inventory.displayProducts();

        System.out.println();

        inventory.deleteProduct(102);

        System.out.println();

        inventory.displayProducts();
    }
}