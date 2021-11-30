import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quote">
            <Quote />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
