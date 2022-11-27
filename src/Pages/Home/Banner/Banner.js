import React from 'react';
import img1 from '../../../asstes/banner/1.jpg';
import img2 from '../../../asstes/banner/2.jpg';
import BannerItems from './BannerItems';

const bannerData = [
  {
      image: img1,
      prev: 2,
      id: 1,
      next: 2
  },
  {
      image: img2,
      prev: 1,
      id: 2,
      next: 1
  }
  
]

const Banner = () => {
    return (
        <div className="carousel w-full">
        {
          bannerData.map(slide => <BannerItems
          key={slide.id}
          slide={slide}
          >
          </BannerItems>)
        }
      </div>
    );
};

export default Banner;