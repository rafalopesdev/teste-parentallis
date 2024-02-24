import React from 'react';
import Woman from '../assets/woman.svg';
import School from '../assets/school.svg';
import Company from '../assets/company.svg';

const Produtos = () => {
  return (
    <div className="w-full h-full">
      <h2 className="line-before text-center">Nosso propósito</h2>
      <div className="container m-auto grid grid-cols-3 gap-5">
        <div className="bg rounded-lg p-5 bg-[#69688C]">
          <img src={Woman} width={100} alt="Menina" className="m-auto" />
          <h3>Para Você</h3>
          <p className="text-center text-white">
            Levar saúde emocional às pessoas através da ampliação da visão sobre
            parentalidade consciente. Acreditamos no ser humano de forma
            integral: físico, mental e emocional!
          </p>
          <a href="">Saiba Mais</a>
        </div>
        <div className="border-2 rounded-lg p-5 bg-[#69688C]">
          <img src={School} width={100} alt="Menino" className="m-auto" />
          <h3>Para Escolas</h3>
          <p className="text-center text-white">
            Reduzir danos! Reeducar os adultos cuidadores (pais, mães, avós,
            tios, padrinhos etc.) para que, ao olhar para sua história, possam
            entender e quebrar o ciclo de violência transgeracional da qual
            foram criados e, assim, recriar uma nova história para educar.
          </p>
          <a href="">Saiba Mais</a>
        </div>
        <div className="border-2 rounded-lg p-5 bg-[#69688C]">
          <img src={Company} width={100} alt="Familia" className="m-auto" />
          <h3>Para Empresas</h3>
          <p className="text-center text-white">
            Democratizar as informações sobre parentalidade consciente para que
            os adultos cuidadores possam contribuir com a formação de uma nova e
            verdadeira geração mais saudável emocionalmente.
          </p>
          <a href="">Saiba Mais</a>
        </div>
      </div>
    </div>
  );
};

export default Produtos;
