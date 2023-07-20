import React from 'react';
import './HolidayDetails.css';

const HolidayDetails = ({ id, holidays }) => {
    const specificHoliday = holidays.find(holiday => holiday.localName === id.split('-').join(' '))
    
    return (
        <div className="holiday-details">
            <h2>{specificHoliday.name}</h2>
            <h3>{specificHoliday.date}</h3>
            {specificHoliday.global === true ? <p>Global holiday</p> : <p>Not a global holiday</p>}
        </div>
    )
}

export default HolidayDetails;