import React from 'react';

const Product = ({product}) => {
    const {name, img, id } = product;
    console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
                <img src={img} alt="furniture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
            </div>
        </div>
        </div>
    );
};

export default Product;