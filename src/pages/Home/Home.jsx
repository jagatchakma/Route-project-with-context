import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    return (
        <div>
            <h3>Welcome to Home Page  {tshirts.length}</h3>
            {
                tshirts.map(tshirt => console.log(tshirt.name))
            }
        </div>
    );
};

export default Home;