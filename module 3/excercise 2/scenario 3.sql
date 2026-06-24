CREATE OR REPLACE PROCEDURE AddNewCustomer(
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

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Customer Added Successfully');

EXCEPTION
   WHEN DUP_VAL_ON_INDEX THEN
      DBMS_OUTPUT.PUT_LINE('Error: Customer ID Already Exists');

   WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;


BEGIN
   AddNewCustomer(
      3,
      'Varshitha',
      TO_DATE('2003-08-15','YYYY-MM-DD'),
      2500
   );
END;

SELECT * FROM Customers;
