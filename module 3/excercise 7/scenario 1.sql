CREATE OR REPLACE PACKAGE CustomerManagement AS

   PROCEDURE AddCustomer(
      p_id NUMBER,
      p_name VARCHAR2,
      p_dob DATE,
      p_balance NUMBER
   );

   PROCEDURE UpdateCustomer(
      p_id NUMBER,
      p_balance NUMBER
   );

   FUNCTION GetCustomerBalance(
      p_id NUMBER
   ) RETURN NUMBER;

END CustomerManagement;





CREATE OR REPLACE PACKAGE BODY CustomerManagement AS

   PROCEDURE AddCustomer(
      p_id NUMBER,
      p_name VARCHAR2,
      p_dob DATE,
      p_balance NUMBER
   )
   IS
   BEGIN
      INSERT INTO Customers
      (CustomerID, Name, DOB, Balance, LastModified, IsVIP)
      VALUES
      (p_id, p_name, p_dob, p_balance, SYSDATE, 'FALSE');
   END AddCustomer;

   PROCEDURE UpdateCustomer(
      p_id NUMBER,
      p_balance NUMBER
   )
   IS
   BEGIN
      UPDATE Customers
      SET Balance = p_balance
      WHERE CustomerID = p_id;
   END UpdateCustomer;

   FUNCTION GetCustomerBalance(
      p_id NUMBER
   ) RETURN NUMBER
   IS
      v_balance NUMBER;
   BEGIN
      SELECT Balance
      INTO v_balance
      FROM Customers
      WHERE CustomerID = p_id;

      RETURN v_balance;
   END GetCustomerBalance;

END CustomerManagement;

SELECT CustomerManagement.GetCustomerBalance(1)
FROM DUAL;
