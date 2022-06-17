import React, { useState, useEffect } from 'react';
import './Clock.css';
//import { ReactComponent as ClockIcon } from '../images/icons/clock.svg';
//import { ReactComponent as CalenderIcon } from '../images/icons/calendar.svg';

const Clock = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 1000);
    }, []);

    return (
        <div className="clock">
            <p className="clock-day">
                {dateState.toLocaleDateString('en-US',{
                    weekday: 'long',
                })}
            </p>
            <p className="clock-date">
              {dateState.toLocaleDateString('en-US', {
                 day: 'numeric',
                 month: 'short',
                 year: 'numeric',
              })}
              
              {' | '}
             {dateState.toLocaleString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true,
            })}
            </p>
        </div>
    );
}

export default Clock;