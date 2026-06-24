

BEGIN
   FOR c IN (
      SELECT CustomerID, Balance
      FROM Customers
   )
   LOOP
      IF c.Balance > 10000 THEN
         UPDATE Customers
         SET IsVIP = 'TRUE'
         WHERE CustomerID = c.CustomerID;
      ELSE
         UPDATE Customers
         SET IsVIP = 'FALSE'
         WHERE CustomerID = c.CustomerID;
      END IF;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Scenario 2 Completed');
END;
SELECT * FROM Customers;