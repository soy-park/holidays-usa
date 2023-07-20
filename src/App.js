import React, { useState, useEffect } from 'react';
import './App.css';
import { getHolidays } from './apiCalls';
import HolidaysContainer from './Components/HolidaysContainer/HolidaysContainer';
import HolidayDetails from './Components/HolidayDetails/HolidayDetails';
import { Route, Switch } from 'react-router-dom';


const App = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    getHolidays() 
      .then(data => {
        console.log(data)
        setHolidays(data)
      })
      .catch(error => console.log('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Holidays in the United States</h1>
      <Switch>
        <Route exact path='/' render={() => <HolidaysContainer holidays={holidays} />} />
        <Route path='/:id' render={({ match }) => {
          const holidayId = match.params.id
          return (<HolidayDetails id={holidayId} holidays={holidays} />)
        }} />
      </Switch>
    </div>
  );
}

export default App;
