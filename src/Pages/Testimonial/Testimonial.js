import React from 'react';
import people1 from '../../asstes/testimonial/people1.png'; 
import people2 from '../../asstes/testimonial/people2.png'; 
import people3 from '../../asstes/testimonial/people3.png'; 
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Dhaka'
        },
        {
            _id: 2, 
            name: 'Alexa',
            img: people2,
            review: 'It was an trusted platform. I bougth so many products',
            location: 'Sylhet'
        },
        {
            _id: 3, 
            name: 'Errum',
            img: people3,
            review: 'Explore Our Fresh Modern Furniture At Low Prices. The Quality You Want At Prices You Love. Restyle Your Home For A Fresh Look',
            location: 'Khulna'
        },
    ]

    return (
        <section className='max-w-[1140px] mx-auto pt-20 pb-20'>
                <div className='pb-16 text-center'>
                    <h4 className="text-xl text-primary font-bold text-center pb-3">Testimonial</h4>
                    <h2 className="text-4xl">What Our Client Says</h2>
                </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;