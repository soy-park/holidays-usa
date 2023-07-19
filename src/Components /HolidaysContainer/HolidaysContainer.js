import React from 'react';
import '../HolidaysContainer/HolidaysContainer.css';
import HolidayCard from '../HolidayCard/HolidayCard';

const HolidaysContainer = props => {
  const holidayCards = props.holidays.map(holiday => {
    return (
      <HolidayCard holiday={holiday.name} holidays={props.holidays} />
    )
  });

  return (
    <section className="holidays-container">
      {holidayCards}
    </section>
  )
}

export default HolidaysContainer;