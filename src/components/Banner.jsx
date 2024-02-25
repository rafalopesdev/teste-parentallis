import ImgFamilyTop from '../assets/mother.png';

const Banner = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div className="absolute container">
        <h1 className="text-[#F29F8D] text-6xl text-center">
          EDUCAÇÃO POSITIVA E RESPEITOSA<br></br>ASSISTÊNCIA PARENTAL
        </h1>
        <span className="line text-center m-auto block text-white text-3xl font-light">
          Consultoria em Desenvolvimento Humano
        </span>
      </div>
      <img
        src={ImgFamilyTop}
        alt="Família"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Banner;
