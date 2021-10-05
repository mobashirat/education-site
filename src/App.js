import logo from './logo.svg';
import './App.css';
import Services from './components/Services/Services';
import About from './components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Activities from './components/Activities/Activities';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>

          </Route>
          <Route path="/activities">
            <Activities></Activities>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="*">
            <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
