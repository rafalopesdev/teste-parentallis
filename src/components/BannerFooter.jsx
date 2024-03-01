import BannerSec from '../assets/bg-banner-second.png';

const BannerFooter = () => {
  return (
    <div className="spacer-top w-full h-full relative flex items-center">
      <div className="container m-auto absolute bg-green-400"></div>
      <img src={BannerSec} alt="Família" className="w-full -z-10" />
    </div>
  );
};

export default BannerFooter;
