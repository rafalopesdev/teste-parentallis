import Family from '../assets/family.png';

const About = () => {
  return (
    <div className="w-full h-full bg-[#69688C]">
      <div
        className="container spacer-side m-auto grid lg:grid-cols-2 gap-5 items-center justify-between"
        id="about"
      >
        <div>
          <h2 className="lg:text-left text-center lg:mt-0 mt-10 text-4xl font-bold lg:text-4xl line-before text-[#F29F8D]">
            Sobre a Parentallis
          </h2>
          <p className="text-white">
            A palavra PARENTALLIS vem do Latim PARENTALIS, que é “relativo a pai
            ou mãe”. Também tem origem na palavra PARERE, que significa “dar à
            luz, fazer nascer”. A Parentallis nasceu trazendo novos olhares
            sobre parentalidade consciente para as famílias que querem
            estabelecer relações respeitosas com permanência e consistência!
            Nossa atuação tem como base a relação da Parentalidade com saúde
            Emocional e Mental. Entendemos que problemas emocionais e mentais
            ligados às questões familiares merecem acolhimento dentro DESSE
            CONTEXTO.
          </p>
        </div>
        <div>
          <img src={Family} alt="Família brincando" />
        </div>
      </div>
    </div>
  );
};

export default About;
