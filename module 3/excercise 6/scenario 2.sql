SET SERVEROUTPUT ON;

DECLARE
   CURSOR ApplyAnnualFee IS
      SELECT AccountID
      FROM Accounts;

BEGIN
   FOR rec IN ApplyAnnualFee LOOP

      UPDATE Accounts
      SET Balance = Balance - 100
      WHERE AccountID = rec.AccountID;

   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE('Annual Fee Applied');

END;
SELECT * FROM Accounts;