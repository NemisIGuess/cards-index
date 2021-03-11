import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import ContextProvider from './Components/ContextProvider/Context';
import Units from './Components/Units/Units';
import Spells from './Components/Spells/Spells';
import Lands from './Components/Lands/Lands';
import Rules from './Components/Rules/Rules';
import Navigation from './Components/Navigation/Navigation';

const App = () => {
  return (
    // <ContextProvider>
    <div className="container">
      <Navigation />
      <Switch>
        <Route path="/units" exact component={Units} />
        <Route path="/spells" exact component={Spells} />
        <Route path="/lands" exact component={Lands} />
        <Route path="/rules" exact component={Rules} />
      </Switch>
    </div>
    // </ContextProvider>
  );
};

export default App;
