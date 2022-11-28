import React from 'react';

const Category = ({category}) => {
    const {name, img } = category;
    console.log(category)
    return (
        <div className="card bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                
            </div>
        </div>
    );
};

export default Category;