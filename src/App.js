import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Create  from './components/Create';
import { Users } from './components/Users';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/list' component={Users}/>
          <Route path='/' component={Create} exact/>
          <Route path='/:id' component={Update} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
