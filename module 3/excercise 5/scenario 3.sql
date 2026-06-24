CREATE OR REPLACE TRIGGER CheckTransactionRules
BEFORE INSERT ON Transactions
FOR EACH ROW
DECLARE
   v_balance NUMBER;
BEGIN

   IF :NEW.TransactionType = 'Deposit' THEN
      IF :NEW.Amount <= 0 THEN
         RAISE_APPLICATION_ERROR(
         -20001,
         'Deposit Amount Must Be Positive');
      END IF;
   END IF;

   IF :NEW.TransactionType = 'Withdrawal' THEN

      SELECT Balance
      INTO v_balance
      FROM Accounts
      WHERE AccountID = :NEW.AccountID;

      IF :NEW.Amount > v_balance THEN
         RAISE_APPLICATION_ERROR(
         -20002,
         'Insufficient Balance');
      END IF;

   END IF;
END;

INSERT INTO Transactions
VALUES(
4,
1,
SYSDATE,
2000,
'Withdrawal'
);
SELECT * FROM Transactions;