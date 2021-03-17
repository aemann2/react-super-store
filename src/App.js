import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
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
    const fetchData = async () => {
      await axios
        .get('https://gp-super-store-api.herokuapp.com/item/list?sortDir=asc')
        .then((response) => setItems(response.data.items))
        // using proper error handling
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          } else if (err.request) {
            console.log(err.request);
          } else {
            console.log('There has been an error');
          }
        });
    };
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
          {/* routing with a page URL based on the item ID */}
          <Route path='/item/:id'>
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
