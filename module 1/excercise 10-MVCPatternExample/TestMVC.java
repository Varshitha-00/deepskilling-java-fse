public class TestMVC
{
    public static void main(String[] args)
    {
        Student student = new Student();

        student.setName("Rahul");

        student.setId(101);

        student.setGrade("A");

        StudentView view = new StudentView();

        StudentController controller =
                new StudentController(student, view);

        controller.updateView();

        System.out.println();

        controller.setStudentGrade("A+");

        controller.updateView();
    }
}