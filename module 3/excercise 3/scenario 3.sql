CREATE OR REPLACE PROCEDURE TransferFunds(
   p_fromAccount NUMBER,
   p_toAccount NUMBER,
   p_amount NUMBER
)
IS
   v_balance NUMBER;
BEGIN
   SELECT Balance
   INTO v_balance
   FROM Accounts
   WHERE AccountID = p_fromAccount;

   IF v_balance >= p_amount THEN

      UPDATE Accounts
      SET Balance = Balance - p_amount
      WHERE AccountID = p_fromAccount;

      UPDATE Accounts
      SET Balance = Balance + p_amount
      WHERE AccountID = p_toAccount;

      COMMIT;

      DBMS_OUTPUT.PUT_LINE('Fund Transfer Successful');

   ELSE

      DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

   END IF;
END;


BEGIN
   TransferFunds(1,2,500);
END;
SELECT * FROM Accounts;
