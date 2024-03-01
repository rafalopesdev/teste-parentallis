import Woman from '../assets/woman.svg';
import School from '../assets/school.svg';
import Company from '../assets/company.svg';

const Produtos = () => {
  return (
    <div className="spacer w-full" id="produto">
      <h2 className="text-center text-2xl font-bold lg:text-4xl line-before text-[#69688C]">
        Nossos Produtos
      </h2>
      <div className="h-full container m-auto grid lg:grid-cols-3 gap-5">
        <div className="relative bg rounded-lg p-5 bg-[#69688C]">
          <img src={Woman} width={100} alt="Menina" className="m-auto" />
          <h3 className="text-center text-[#F29F8D] text-xl font-bold">
            Para Você
          </h3>
          <p className="text-center text-white">
            Levar saúde emocional às pessoas através da ampliação da visão sobre
            parentalidade consciente. Acreditamos no ser humano de forma
            integral: físico, mental e emocional!
          </p>
          <div className=" w-full flex flex-row right-0 justify-center bottom-0">
            <a href="" className="btn-produtos">
              Saiba Mais
            </a>
          </div>
        </div>
        <div className="w-full relative h-full bg rounded-lg p-5 bg-[#69688C]">
          <img src={School} width={100} alt="Menino" className="m-auto" />
          <h3 className="text-center text-[#F29F8D] text-xl font-bold">
            Para Escolas
          </h3>
          <p className="text-center text-white">
            Reduzir danos! Reeducar os adultos cuidadores (pais, mães, avós,
            tios, padrinhos etc.) para que, ao olhar para sua história, possam
            entender e quebrar o ciclo de violência transgeracional da qual
            foram criados e, assim, recriar uma nova história para educar.
          </p>
          <div className=" w-full flex flex-row right-0 justify-center bottom-0">
            <a href="" className="btn-produtos">
              Saiba Mais
            </a>
          </div>
        </div>
        <div className="w-full relative h-full bg rounded-lg p-5 bg-[#69688C]">
          <img src={Company} width={100} alt="Familia" className="m-auto" />
          <h3 className="text-center text-[#F29F8D] text-xl font-bold">
            Para Empresas
          </h3>
          <p className="text-center text-white">
            Democratizar as informações sobre parentalidade consciente para que
            os adultos cuidadores possam contribuir com a formação de uma nova e
            verdadeira geração mais saudável emocionalmente.
          </p>
          <div className=" w-full flex flex-row right-0 justify-center  bottom-0">
            <a href="" className="btn-produtos">
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
