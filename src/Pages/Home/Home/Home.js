import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Testimonial/>
        </div>
    );
};

export default Home;