import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TshirtHolder from './TshirtHolder/TshirtHolder';
import './Home.css'
import Cart from './Cart/Cart';
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        // console.log(tshirt);

        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            // alert("already added")
            toast("Already added")
        }
        else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const removeFromeCart = (id) => {
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }

    return (
        <div className='homeContainer'>
            <div className='productContainer'>
                {
                    tshirts.map(tshirt => <TshirtHolder
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TshirtHolder>)
                }
            </div>
            <div className='cartContainer'>
                <Cart
                    cart={cart}
                    removeFromeCart={removeFromeCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;