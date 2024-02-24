import KidsTech from '../assets/kids-techologyc.png';

const Consultoria = () => {
  return (
    <div className="w-full h-full">
      <h2 className="text-center">Nossa Consultoria</h2>
      <p className="text-center">
        Somos a primeira EdTech brasileira de Parentalidade Consciente!
      </p>
      <div className="container m-auto grid grid-cols-2 gap-5 items-center justify-between">
        <div>
          <h2 className="line-before title">Sobre a Parentallis</h2>
          <p className="">
            Levamos conteúdos específicos a cada perfil de família de forma que
            possam se reeducar e criar de forma respeitosa crianças e
            adolescentes, sem cair na permissividade ou na agressividade.
            Conteúdos criados exclusivamente por especialistas na área de
            Educação Parental e que abrangem todos os assuntos envolvendo a
            relação entre pais e filhos de maneira muito profunda mas de fácil
            compreensão e aplicação. Além disso desenvolvemos projetos para
            escolas e para profissionais da educação e saúde que lidem com
            crianças e adolescentes
          </p>
        </div>
        <div>
          <img src={KidsTech} alt="Família brincando" />
        </div>
      </div>
    </div>
  );
};

export default Consultoria;
