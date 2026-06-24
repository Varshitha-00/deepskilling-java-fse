public class TaskManagement
{
    class Node
    {
        Task task;
        Node next;

        Node(Task task)
        {
            this.task = task;
            this.next = null;
        }
    }

    private Node head;

    public void addTask(Task task)
    {
        Node newNode = new Node(task);

        if(head == null)
        {
            head = newNode;
        }
        else
        {
            Node current = head;

            while(current.next != null)
            {
                current = current.next;
            }

            current.next = newNode;
        }

        System.out.println("Task Added");
    }

    public void searchTask(int taskId)
    {
        Node current = head;

        while(current != null)
        {
            if(current.task.taskId == taskId)
            {
                System.out.println(current.task);
                return;
            }

            current = current.next;
        }

        System.out.println("Task Not Found");
    }

    public void traverseTasks()
    {
        Node current = head;

        while(current != null)
        {
            System.out.println(current.task);
            current = current.next;
        }
    }

    public void deleteTask(int taskId)
    {
        if(head == null)
        {
            System.out.println("Task Not Found");
            return;
        }

        if(head.task.taskId == taskId)
        {
            head = head.next;
            System.out.println("Task Deleted");
            return;
        }

        Node current = head;

        while(current.next != null &&
              current.next.task.taskId != taskId)
        {
            current = current.next;
        }

        if(current.next != null)
        {
            current.next = current.next.next;
            System.out.println("Task Deleted");
        }
        else
        {
            System.out.println("Task Not Found");
        }
    }

    public static void main(String[] args)
    {
        TaskManagement taskList =
                new TaskManagement();

        taskList.addTask(
                new Task(101,
                         "Design Module",
                         "Pending"));

        taskList.addTask(
                new Task(102,
                         "Coding",
                         "In Progress"));

        taskList.addTask(
                new Task(103,
                         "Testing",
                         "Pending"));

        System.out.println();

        System.out.println("All Tasks");

        taskList.traverseTasks();

        System.out.println();

        System.out.println("Search Task");

        taskList.searchTask(102);

        System.out.println();

        taskList.deleteTask(102);

        System.out.println();

        System.out.println("After Deletion");

        taskList.traverseTasks();
    }
}