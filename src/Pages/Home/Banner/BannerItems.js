import React from 'react';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image, prev, next, id} = slide;
    return (
            <div id={`slide${id}`} className="carousel-item relative w-full h-screen">
        <div className="carasoul-img">
        <img src={image} className="w-full" />
        </div>
        <div className="absolute flex justify-start inset-x-1/4  top-1/3 ">
         <p className='text-xl lg:text-2xl font-bold text-white'>
            Collection 2022
         </p>
        </div>
        <div className="absolute flex  inset-x-1/4  top-1/2 mb-10">
          <h1 className='text-2xl lg:text-5xl mb-12 lg:mb-8  font-semibold text-white '>
          We provide <br/>
           Best Furniture in town
          </h1>
        </div>
        <div className="absolute flex justify-start inset-x-1/4 top-2/3">
          <button className="btn btn-primary text-white">Shop Now</button>
          
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${prev}`} className="btn  btn-primary">❮</a> 
          <a href={`#slide${next}`} className="btn  btn-primary">❯</a>
        </div>
           </div>

       
    );
};

export default BannerItems;