import React, { useState, useEffect } from 'react';
import './App.css';
import { getHolidays } from './apiCalls';
import HolidaysContainer from './Components/HolidaysContainer';

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
      <HolidaysContainer holidays={holidays}/>
    </div>
  );
}

export default App;
