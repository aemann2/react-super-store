import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/style.css';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Search from './components/search/Search';
import Home from './components/pages/Home';
import Deals from './components/pages/Deals';
import Cart from './components/pages/Cart';
import ItemPage from './components/pages/ItemPage';

function App() {
  // a generic fetch function that can be passed to pages to do the fetching
  const fetchData = async (endpoint, state) => {
    await axios
      .get(endpoint)
      .then((response) => state(response.data.items))
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

  return (
    // wrapping page content in the router
    <Router>
      <div className='App'>
        <Navbar />
        {/* this is the current recommended pattern for creating routes in React */}
        <Switch>
          <Route exact path='/'>
            <Search fetchData={fetchData} />
            <Home fetchData={fetchData} />
          </Route>
          <Route exact path='/deals'>
            <Search fetchData={fetchData} />
            <Deals fetchData={fetchData} />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
          {/* routing with a page URL based on the item ID */}
          <Route exact path='/item/:id'>
            <ItemPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
