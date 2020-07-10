import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {ExpenseTransaction} from "./ExpenseTransaction";

export const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-expense">
      <h2>Historial de gastos</h2>
      <ul className="transaction-list">
        {expenseTransactions.map(expenseTransaction => (
          <ExpenseTransaction
            key={expenseTransaction.id}
            expenseTransaction={expenseTransaction}
          />
        ))}
      </ul>
    </div>
  );
};
