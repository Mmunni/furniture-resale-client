import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../Modal/BookingModal/BookingModal';
import Product from './Product';

const Products = () => {
    const [item, setItem] = useState(null);
    const products = useLoaderData();
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='max-w-[1140px] mx-auto pt-20 pb-20'>
            <div className="text-center pb-16">
                <h4 className="text-xl text-primary font-bold text-center pb-3">Category</h4>
                <h2 className="text-4xl">All Collections</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        setItem={setItem}
                    ></Product>)
                }
            </div>
            {
                item &&
                <BookingModal
                    selectedDate={selectedDate}
                    item={item}
                    setItem={setItem}
                    // refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default Products;