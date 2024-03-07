import BannerBottom from '../assets/banner-footer.png';

const BannerFooter = () => {
  return (
    <div className="w-full h-64 relative flex items-center justify-center">
      <div className="container m-auto absolute bg-green-400"></div>
      <img
        src={BannerBottom}
        alt="Família"
        className="w-full -z-10 w-full h-full object-cover"
      />
    </div>
  );
};

export default BannerFooter;
