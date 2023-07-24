import React from 'react';
import './HolidayCard.css';
import { NavLink } from 'react-router-dom';

const HolidayCard = ({ id, holiday, holidays }) => {
    return (
        <NavLink to={`/${id}`} key={`${id}`}>
            <h2 className="holiday-name">{holiday}</h2>
        </NavLink>
    )
}

export default HolidayCard;