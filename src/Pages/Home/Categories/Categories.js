import React, { useEffect } from 'react';
import Category from './Category';
import livingRoom from '../../../asstes/categories/livingRoom.avif';
import bedRoom from '../../../asstes/categories/bedroom1.avif';
import dinningRoom from '../../../asstes/categories/dinningRoom.jpg';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    // const categoriesData = [
    //     {
    //         id: 1,
    //         name: 'LivingRoom Furniture',
    //         img:livingRoom
    //     },
    //     {
    //         id: 2,
    //         name: 'BedRoom Furniture',
    //         img:bedRoom
    //     },
    //     {
    //         id: 3,
    //         name: 'DinningRoom Furniture',
    //         img:dinningRoom
    //     },
    // ]
    const categories = useLoaderData();

    return (
            <section className='max-w-[1140px] mx-auto pt-20 pb-20'>
            <div className="text-center pb-16">
                <h4 className="text-xl text-primary font-bold text-center pb-3">Category</h4>
                <h2 className="text-4xl">Our Collections</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </section>
    );
};

export default Categories;