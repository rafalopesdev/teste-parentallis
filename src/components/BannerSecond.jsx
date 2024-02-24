import React from 'react';
import BannerSec from '../assets/bg-banner-second.png';

const BannerSecond = () => {
  return (
    <div className="w-full h-full relative flex items-center">
      <div className="container m-auto absolute bg-green-400">
        <h2 className="text-center">
          Maternar é antes de tudo se auto educar para sempre
        </h2>
        <p className="text-center">Fernanda Bardela</p>
      </div>
      <img src={BannerSec} alt="Família" className="w-full -z-10" />
    </div>
  );
};

export default BannerSecond;
