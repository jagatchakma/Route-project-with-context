import React from 'react';
import './TshirtHolder.css'

const TshirtHolder = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <p>Name: {name}</p>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default TshirtHolder;