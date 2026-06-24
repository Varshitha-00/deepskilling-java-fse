CREATE OR REPLACE PACKAGE AccountOperations AS

   PROCEDURE OpenAccount(
      p_accountid NUMBER,
      p_customerid NUMBER,
      p_type VARCHAR2,
      p_balance NUMBER
   );

   PROCEDURE CloseAccount(
      p_accountid NUMBER
   );

   FUNCTION GetTotalBalance(
      p_customerid NUMBER
   ) RETURN NUMBER;

END AccountOperations;


CREATE OR REPLACE PACKAGE BODY AccountOperations AS

PROCEDURE OpenAccount(
   p_accountid NUMBER,
   p_customerid NUMBER,
   p_type VARCHAR2,
   p_balance NUMBER
)
IS
BEGIN
   INSERT INTO Accounts
   VALUES(
      p_accountid,
      p_customerid,
      p_type,
      p_balance,
      SYSDATE
   );
END;

PROCEDURE CloseAccount(
   p_accountid NUMBER
)
IS
BEGIN
   DELETE FROM Accounts
   WHERE AccountID=p_accountid;
END;

FUNCTION GetTotalBalance(
   p_customerid NUMBER
)
RETURN NUMBER
IS
   v_total NUMBER;
BEGIN
   SELECT SUM(Balance)
   INTO v_total
   FROM Accounts
   WHERE CustomerID=p_customerid;

   RETURN v_total;
END;

END AccountOperations;
SELECT AccountOperations.GetTotalBalance(1)
FROM DUAL;
