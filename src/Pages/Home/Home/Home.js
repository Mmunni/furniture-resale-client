import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Testimonial from '../../Testimonial/Testimonial';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner/>
            <Categories/>
            <Testimonial/>
        </div>
    );
};

export default Home;