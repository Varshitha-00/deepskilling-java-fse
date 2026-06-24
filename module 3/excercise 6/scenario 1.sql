SET SERVEROUTPUT ON;

DECLARE
   CURSOR GenerateMonthlyStatements IS
      SELECT c.Name,
             t.TransactionID,
             t.Amount,
             t.TransactionType
      FROM Customers c
      JOIN Accounts a
      ON c.CustomerID = a.CustomerID
      JOIN Transactions t
      ON a.AccountID = t.AccountID
      WHERE EXTRACT(MONTH FROM t.TransactionDate)
            = EXTRACT(MONTH FROM SYSDATE);

BEGIN
   FOR rec IN GenerateMonthlyStatements LOOP
      DBMS_OUTPUT.PUT_LINE(
         'Customer: ' || rec.Name ||
         ' Transaction ID: ' || rec.TransactionID ||
         ' Amount: ' || rec.Amount ||
         ' Type: ' || rec.TransactionType
      );
   END LOOP;
END;
SELECT * FROM Transactions;

