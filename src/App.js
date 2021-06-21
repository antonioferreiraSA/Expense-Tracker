import './App.css';

import { Balance } from './components/Balance';
import {Header} from '../src/components/Header';
import { IncomeExpenses } from './components/IncomeExpenses';
import {TransctionList} from './components/TransctionList';

function App() {
  return (
    <div>
     <Header/>
     <div className="container">
       <Balance/>
       <IncomeExpenses/>
       <TransctionList/>
     </div>
      
    </div>
  );
}

export default App;
