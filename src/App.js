import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Deals from './components/pages/Deals';
import Cart from './components/pages/Cart';
import ItemPage from './components/pages/ItemPage';
import Checkout from './components/pages/Checkout';
import { CartContextProvider } from './contexts/CartContext';

function App() {
  return (
    <CartContextProvider>
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
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
            {/* routing with a page URL based on the item ID */}
            <Route exact path='/item/:id'>
              <ItemPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
    // wrapping page content in the router
  );
}

export default App;
