import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {name, img, id } = category;
    console.log(category)
    return (
        <div className="card bg-base-100 shadow-xl">
           <figure className="px-10 pt-10">
                <img src={img} alt="furniture" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                <div className="card-actions text-center items-center mt-5">
           <Link to={`/categories/${id}`}>
              <button className="btn bg-theme-color w-full mx-auto">View More</button>
           </Link>
          </div>
            </div>
        </div>
    );
};

export default Category;