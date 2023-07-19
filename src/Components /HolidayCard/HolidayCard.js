import React from 'react';
import '../HolidayCard/HolidayCard.css';
import { NavLink } from 'react-router-dom';

const HolidayCard = props => {
    return (
        <NavLink to={`/${id}`} key={`${id}`}>
            <h2>{props.holiday}</h2>
        </NavLink>
    )
}

export default HolidayCard;