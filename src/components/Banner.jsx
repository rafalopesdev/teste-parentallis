import ImgFamilyTop from '../assets/mother.png';
import Nav from './Nav';

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <Nav />
      <h1>subtitulo</h1>
      <img
        src={ImgFamilyTop}
        alt="texto"
        className="w-full h-screen absolute object-cover -z-10"
      />
    </div>
  );
};

export default Banner;
