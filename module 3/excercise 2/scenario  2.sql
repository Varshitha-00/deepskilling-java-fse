CREATE OR REPLACE PROCEDURE UpdateSalary(
   p_empid NUMBER,
   p_percent NUMBER
)
IS
BEGIN
   UPDATE Employees
   SET Salary = Salary + (Salary * p_percent/100)
   WHERE EmployeeID = p_empid;

   IF SQL%ROWCOUNT = 0 THEN
      RAISE_APPLICATION_ERROR(-20002,
      'Employee ID Not Found');
   END IF;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Salary Updated Successfully'
   );

EXCEPTION
   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE(
         'Error: ' || SQLERRM
      );
END;
BEGIN
   UpdateSalary(1,10);
END;
SELECT * FROM Employees;
