
import './index.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Transaction from './components/Transaction';
import IncomeList from './components/IncomeList';
// import ExpenseTransaction from './components/ExpenseTransaction' ;
import ExpenseList from './components/ExpenseList';
import {GlobalContextProvider} from './context/GlobalState'

import 'react-dropdown/style.css';
// import IncomeTransaction from './components/IncomeTransaction'
function App() {
  return (
    <GlobalContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
        <Transaction/>
        <IncomeList/>
      {/* < IncomeTransaction/>
      <ExpenseTransaction/> */}
      {/* adding the above two throwing an error  */}
        <ExpenseList/>
      </div>
      
    </div>
    </GlobalContextProvider>
  );
}

export default App;
