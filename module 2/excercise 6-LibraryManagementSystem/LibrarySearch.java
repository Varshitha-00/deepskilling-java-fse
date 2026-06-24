import java.util.Arrays;
import java.util.Comparator;

public class LibrarySearch
{
    public static Book linearSearch(Book[] books,
                                    String title)
    {
        for(Book book : books)
        {
            if(book.getTitle().equalsIgnoreCase(title))
            {
                return book;
            }
        }

        return null;
    }

    public static Book binarySearch(Book[] books,
                                    String title)
    {
        int left = 0;
        int right = books.length - 1;

        while(left <= right)
        {
            int mid = (left + right) / 2;

            int result =
                    books[mid].getTitle()
                              .compareToIgnoreCase(title);

            if(result == 0)
            {
                return books[mid];
            }
            else if(result < 0)
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
        Book[] books =
        {
            new Book(101,
                     "Java Programming",
                     "James Gosling"),

            new Book(102,
                     "Data Structures",
                     "Mark Allen"),

            new Book(103,
                     "Operating Systems",
                     "Galvin"),

            new Book(104,
                     "Computer Networks",
                     "Tanenbaum")
        };

        System.out.println("Linear Search");

        Book book1 =
                linearSearch(books,
                             "Data Structures");

        if(book1 != null)
        {
            System.out.println(book1);
        }

        Arrays.sort(
                books,
                Comparator.comparing(
                        Book::getTitle));

        System.out.println();

        System.out.println("Binary Search");

        Book book2 =
                binarySearch(books,
                             "Data Structures");

        if(book2 != null)
        {
            System.out.println(book2);
        }
    }
}