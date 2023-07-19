import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { getBirds } from './apiCalls';

const App = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getBirds() 
      .then(data => setHolidays(data))
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
