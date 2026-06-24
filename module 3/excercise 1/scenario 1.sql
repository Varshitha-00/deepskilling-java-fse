SET SERVEROUTPUT ON;



BEGIN
   FOR c IN (
      SELECT CustomerID,
             FLOOR(MONTHS_BETWEEN(SYSDATE,DOB)/12) Age
      FROM Customers
   )
   LOOP
      IF c.Age > 60 THEN
         UPDATE Loans
         SET InterestRate = InterestRate - 1
         WHERE CustomerID = c.CustomerID;
      END IF;
   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Scenario 1 Completed'
   );
END;

SELECT * FROM Loans;

