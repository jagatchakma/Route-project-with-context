import React, { useContext } from 'react';
import Me from '../Me/Me';
import { MoneyContext } from '../GrandPa/GrandPa';

const Father = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Father</h2>
            <button onClick={()=> setMoney(money+1000)}>Add money</button>
            <Me></Me>
        </div>
    );
};

export default Father;