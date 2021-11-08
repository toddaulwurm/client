import './App.css';
import ProductForm from './Components/ProductForm';
import Main from './Components/Main';

import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Manager</h1>
      </header>
          <BrowserRouter>
            <Link to="/products/">Home</Link>
              <Route path="/products/">
                <Main />
              </Route>
              <Route path="/api/product/:id">
                <Detail />
              </Route>
          </BrowserRouter>
      {/* <Main></Main> */}
    </div>
  );
}

export default App;
