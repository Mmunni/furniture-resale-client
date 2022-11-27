import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <Banner/>
            <Categories/>
            <Testimonial/>
        </div>
    );
};

export default Home;