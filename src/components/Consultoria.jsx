import KidsTech from '../assets/kids-techologyc.png';

const Consultoria = () => {
  return (
    <div className="w-full h-full" id="consultoria">
      <h2 className="text-center text-2xl font-bold lg:text-4xl text-[#69688C]">
        Nossa Consultoria
      </h2>
      <p className="lg:text-3xl text-center text-[#69688C] mb-3">
        Somos a primeira <strong>EdTech</strong> brasileira de Parentalidade
        Consciente!
      </p>
      <div className="container m-auto grid lg:grid-cols-2 gap-5 items-center justify-between">
        <div>
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
