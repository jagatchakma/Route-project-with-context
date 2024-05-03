import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../GrandPa/GrandPa';

const Cusigen = () => {
    const contextData = useContext(RingContext);    
    const [a, setA] = useContext(MoneyContext)
    return (
        <div>
            <h2>Cusigen</h2>
            <p>Current {a}</p>
            <small>{contextData}</small>
            <button onClick={()=> setA(a-500)}>expance</button>
        </div>
    );
};

export default Cusigen;