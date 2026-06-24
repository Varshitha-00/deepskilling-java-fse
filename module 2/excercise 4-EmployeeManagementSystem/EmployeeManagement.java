public class EmployeeManagement
{
    private Employee[] employees;
    private int count;

    public EmployeeManagement(int size)
    {
        employees = new Employee[size];
        count = 0;
    }

    public void addEmployee(Employee employee)
    {
        if(count < employees.length)
        {
            employees[count] = employee;
            count++;

            System.out.println("Employee Added");
        }
        else
        {
            System.out.println("Array Full");
        }
    }

    public void searchEmployee(int id)
    {
        for(int i = 0; i < count; i++)
        {
            if(employees[i].getEmployeeId() == id)
            {
                System.out.println(employees[i]);
                return;
            }
        }

        System.out.println("Employee Not Found");
    }

    public void traverseEmployees()
    {
        for(int i = 0; i < count; i++)
        {
            System.out.println(employees[i]);
        }
    }

    public void deleteEmployee(int id)
    {
        int index = -1;

        for(int i = 0; i < count; i++)
        {
            if(employees[i].getEmployeeId() == id)
            {
                index = i;
                break;
            }
        }

        if(index != -1)
        {
            for(int i = index; i < count - 1; i++)
            {
                employees[i] = employees[i + 1];
            }

            employees[count - 1] = null;
            count--;

            System.out.println("Employee Deleted");
        }
        else
        {
            System.out.println("Employee Not Found");
        }
    }

    public static void main(String[] args)
    {
        EmployeeManagement manager =
                new EmployeeManagement(10);

        manager.addEmployee(
                new Employee(101,
                             "Rahul",
                             "Manager",
                             50000));

        manager.addEmployee(
                new Employee(102,
                             "Priya",
                             "Developer",
                             40000));

        manager.addEmployee(
                new Employee(103,
                             "Kiran",
                             "Tester",
                             35000));

        System.out.println();

        System.out.println("Employee Records");

        manager.traverseEmployees();

        System.out.println();

        System.out.println("Search Employee");

        manager.searchEmployee(102);

        System.out.println();

        manager.deleteEmployee(102);

        System.out.println();

        System.out.println("After Deletion");

        manager.traverseEmployees();
    }
}