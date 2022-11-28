import React from 'react';

const Product = ({product}) => {
    const {name, img, original_price, resale_price,used_years,seller_name,location, id } = product;
    console.log(product)
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
                <img src={img} alt="furniture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                <p><span className='font-bold'>Original Price:</span> ${original_price}</p>
                <p><span className='font-bold'>Resale Price:</span> ${resale_price}</p>
                <p><span className='font-bold'>Used:</span> {used_years}</p>
                <p><span className='font-bold'>Seller Name: </span>{seller_name}</p>
                <p><span className='font-bold'>Location: </span>{location}</p>
            </div>

        </div>
        </div>
    );
};

export default Product;