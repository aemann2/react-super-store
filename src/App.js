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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/deals' component={Deals} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
