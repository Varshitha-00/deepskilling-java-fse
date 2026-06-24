public class TestBuilder
{
    public static void main(String[] args)
    {
        Computer computer1 = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM(8)
                .setStorage(512)
                .build();

        Computer computer2 = new Computer.Builder()
                .setCPU("Intel i7")
                .setRAM(16)
                .setStorage(1024)
                .build();

        System.out.println("Computer 1");
        computer1.display();

        System.out.println();

        System.out.println("Computer 2");
        computer2.display();
    }
}