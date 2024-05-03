import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Me from '../Me/Me';
import Uncle from '../Uncle/Uncle';
import Cusigen from '../Cusigen/Cusigen'
import './Grandpa.css'

export const RingContext = createContext()
export const MoneyContext = createContext(0)
const GrandPa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h1>Grand pa</h1>
            <p>Current amount: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='context value is my name'>
                    <section className='grandpa-div'>
                        <Father></Father>
                        <Uncle></Uncle>
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;