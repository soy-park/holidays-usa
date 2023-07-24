import React from 'react';
import '../HolidayDetails/HolidayDetails.css';
import { NavLink } from 'react-router-dom';

const HolidayDetails = ({ id, holidays }) => {
    const specificHoliday = holidays.find(holiday => holiday.localName === id.split('-').join(' '))
    
    return (
        <div className="holiday-details">
            <div className="holiday-facts">
                <h2>{specificHoliday.name}</h2>
                <h3>{specificHoliday.date}</h3>
                {specificHoliday.global === true ? <p>Global holiday</p> : <p>Not a global holiday</p>}
            </div>
            <div className="return-btn-container">
                <NavLink exact to='/'>
                    <button className="return-btn">Return to Holidays</button>
                </NavLink>
            </div>
            
           
        </div>
    )
}

export default HolidayDetails;