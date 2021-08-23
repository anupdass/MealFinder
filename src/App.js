import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details/Details';

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/details/:id'>
          <Details></Details>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
