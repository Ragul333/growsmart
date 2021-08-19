import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create  from './components/Create';
import { Users } from './components/Users';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/list' component={Users}/>
          <Route path='/' component={Create}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
