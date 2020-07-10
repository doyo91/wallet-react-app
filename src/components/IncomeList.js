import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {IncomeTransaction} from "./IncomeTransaction";

export const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Historial de Ingresos</h2>
      <ul className="transaction-list">
        {incomeTransactions.map(incomeTransaction => (
          <IncomeTransaction
            key={incomeTransaction.id}
            incomeTransaction={incomeTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
