import BannerTh from '../assets/bg-banner-third.png';

const BannerThird = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="container m-auto absolute">
        <h2 className="text-center text-[#8EA3BF]">
          Maternar é antes de tudo se auto educar para sempre
        </h2>
        <p className="text-center text-white">Fernanda Bardela</p>
      </div>
      <img src={BannerTh} alt="Família" className="w-full" />
    </div>
  );
};

export default BannerThird;
