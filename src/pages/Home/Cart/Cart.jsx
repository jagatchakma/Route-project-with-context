import React from 'react';

const Cart = ({ cart, removeFromeCart }) => {
    // console.log(cart)
    let message;
    if(cart.length == 0){
        message = <p>No product added</p>
    }
    return (
        <div>
            <h2>lengt: {cart.length}</h2>
            {cart.length > 2 ? <span>large amount</span> : <span>low amount</span>}
            {message}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={()=> removeFromeCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;

// <h2 className={cart.length===1? "classname" : "classname"}>dame text</h2>