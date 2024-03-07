import BannerTh from '../assets/bg-banner-third.png';

const BannerThird = () => {
  return (
    <div className="w-full h-64 relative flex items-center justify-center">
      <div className="container m-auto absolute">
        <h2 className="title-banner text-[#F29F8D]">
          Maternar é antes de tudo se auto educar para sempre
        </h2>
        <p className="text-center text-white">Fernanda Bardela</p>
      </div>
      <img
        src={BannerTh}
        alt="Família"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BannerThird;
