import BannerSec from '../assets/bg-banner-second.png';

const BannerSecond = () => {
  return (
    <div className="spacer w-full h-64 relative flex items-center justify-center">
      <div className="container m-auto absolute">
        <h2 className="title-banner text-[#8EA3BF]">
          Maternar é antes de tudo se auto educar para sempre
        </h2>
        <p className="text-center text-white">Fernanda Bardela</p>
      </div>
      <img
        src={BannerSec}
        alt="Família"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BannerSecond;
