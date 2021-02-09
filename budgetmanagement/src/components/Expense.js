// // import React from 'react';
// import React, {useContext} from "react";
// import {GlobalContext } from '../context/GlobalState';
// import ExpenseTransaction from './ExpenseTransaction'

// const Expense=()=> {
//      const {expenseTransaction} = useContext(GlobalContext)
//     return (
//          <div className="transactions transactions-expense">
//             <h2>Transaction History</h2>
//             <ul className="transaction-list">
//                 {/* <li className="transaction">
//                   <span className="transaction-text">Rent</span>
//                   <span className="transaction-text">$5000</span>
//                   <button className="delete-btn">
//                       <i className="fas fa-trash"></i>
//                   </button>

//                 </li> */}
// This is'not working well

//                 {expenseTransaction.map(expenseTransaction => (
//               <ExpenseTransaction 
//               key={expenseTransaction.id} 
//               incomeTransaction={expenseTransaction}/>
                
//                 ))}
//                 </ul>          
//         </div>
//     );
// }

// export default Expense;