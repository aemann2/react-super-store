import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Deals from './components/pages/Deals';
import Cart from './components/pages/Cart';
import ItemPage from './components/pages/ItemPage';

function App() {
  // lifting up the items state so the results can be passed to child pages
  const [items, setItems] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc'
      );
      setItems(response.data.items);
    }
    fetchData();
  }, []);

  return (
    // wrapping page content in the router
    <Router>
      <div className='App'>
        <Navbar />
        {/* this is the current recommended pattern for creating routes in React */}
        <Switch>
          <Route exact path='/'>
            <Home items={items} />
          </Route>
          <Route exact path='/deals'>
            <Deals items={items} />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          <Route path='/item/:id'>
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
