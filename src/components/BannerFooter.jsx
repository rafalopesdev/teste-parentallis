import BannerBottom from '../assets/banner-footer.png';

const BannerFooter = () => {
  return (
    <div className="spacer-top w-full h-full relative flex items-center">
      <div className="container m-auto absolute bg-green-400"></div>
      <img src={BannerBottom} alt="Família" className="w-full -z-10" />
    </div>
  );
};

export default BannerFooter;
