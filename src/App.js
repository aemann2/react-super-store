import './css/App.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Deals from './components/pages/Deals';
import Cart from './components/pages/Cart';
//importing react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    // wrapping page content in the router
    <Router>
      <div className='App'>
        <Navbar />
        {/* this is the current recommended pattern for creating routes in React */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/deals'>
            <Deals />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
