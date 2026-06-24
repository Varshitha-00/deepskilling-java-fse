

BEGIN
   FOR r IN (
      SELECT c.Name,
             l.LoanID,
             l.EndDate
      FROM Customers c
      JOIN Loans l
      ON c.CustomerID = l.CustomerID
      WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
   )
   LOOP
      DBMS_OUTPUT.PUT_LINE(
         'Reminder: Loan ' || r.LoanID ||
         ' for ' || r.Name ||
         ' is due on ' ||
         TO_CHAR(r.EndDate,'DD-MON-YYYY')
      );
   END LOOP;
END;
SELECT * FROM Loans;