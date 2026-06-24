SET SERVEROUTPUT ON;

DECLARE
   CURSOR UpdateLoanInterestRates IS
      SELECT LoanID
      FROM Loans;

BEGIN
   FOR rec IN UpdateLoanInterestRates LOOP

      UPDATE Loans
      SET InterestRate = InterestRate + 0.5
      WHERE LoanID = rec.LoanID;

   END LOOP;

   COMMIT;

   DBMS_OUTPUT.PUT_LINE(
      'Loan Interest Rates Updated'
   );

END;
SELECT * FROM Loans;