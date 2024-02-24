import ImgFamilyTop from '../assets/mother.png';
// import Nav from './Nav';

const Banner = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={ImgFamilyTop}
        alt="Família"
        className="w-full h-full object-cover absolute"
      />
    </div>
  );
};

export default Banner;
