import React from 'react'
import "./App.css"
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Layout/Pages/Home';
import MyAppBar from './Layout/Components/MyAppBar';

function App() {
  return (
    <div className="App" id="id">
      <MyAppBar/>
      <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

