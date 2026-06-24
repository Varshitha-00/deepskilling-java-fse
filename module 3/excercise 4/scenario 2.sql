CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment(
   p_loanAmount NUMBER,
   p_interestRate NUMBER,
   p_years NUMBER
)
RETURN NUMBER
IS
   v_installment NUMBER;
BEGIN
   v_installment :=
      (p_loanAmount +
      (p_loanAmount * p_interestRate/100 * p_years))
      /(p_years*12);

   RETURN ROUND(v_installment,2);
END;
SELECT CalculateMonthlyInstallment(
5000,5,5
) AS Monthly_Installment
FROM DUAL;