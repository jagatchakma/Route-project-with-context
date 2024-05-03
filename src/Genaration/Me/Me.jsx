import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandPa/GrandPa';

const Me = () => {    
    const contextData = useContext(RingContext)

    return (
        <div>
            <h2>Me</h2>
            <p>{contextData}</p>
        </div>
    );
};

export default Me;