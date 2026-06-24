CREATE OR REPLACE PACKAGE EmployeeManagement AS

   PROCEDURE HireEmployee(
      p_id NUMBER,
      p_name VARCHAR2,
      p_position VARCHAR2,
      p_salary NUMBER,
      p_department VARCHAR2,
      p_hiredate DATE
   );

   PROCEDURE UpdateEmployee(
      p_id NUMBER,
      p_salary NUMBER
   );

   FUNCTION CalculateAnnualSalary(
      p_id NUMBER
   ) RETURN NUMBER;

END EmployeeManagement;




CREATE OR REPLACE PACKAGE BODY EmployeeManagement AS

PROCEDURE HireEmployee(
   p_id NUMBER,
   p_name VARCHAR2,
   p_position VARCHAR2,
   p_salary NUMBER,
   p_department VARCHAR2,
   p_hiredate DATE
)
IS
BEGIN
   INSERT INTO Employees
   VALUES(
      p_id,
      p_name,
      p_position,
      p_salary,
      p_department,
      p_hiredate
   );
END;

PROCEDURE UpdateEmployee(
   p_id NUMBER,
   p_salary NUMBER
)
IS
BEGIN
   UPDATE Employees
   SET Salary=p_salary
   WHERE EmployeeID=p_id;
END;

FUNCTION CalculateAnnualSalary(
   p_id NUMBER
)
RETURN NUMBER
IS
   v_salary NUMBER;
BEGIN
   SELECT Salary INTO v_salary
   FROM Employees
   WHERE EmployeeID=p_id;

   RETURN v_salary*12;
END;

END EmployeeManagement;


SELECT EmployeeManagement.CalculateAnnualSalary(1)
FROM DUAL;