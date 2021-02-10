import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ExpenseTransaction = ({ expenseTransaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li className="transaction">
      <span className="transaction-text">{expenseTransaction.expenseText}</span>
      <span className="transaction-amount">
        ${expenseTransaction.expenseAmount}
      </span>
      <button className="delete-btn"
        onClick={() => 
           { 
          if
          // Asking for confirmation before deleting the list
          
           (window.confirm('Are you sure you wish to delete this item?'))
          deleteTransaction(expenseTransaction.id)
        }}
        
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default ExpenseTransaction;