import React from 'react';
import Girl from '../assets/girl.svg';
import Boy from '../assets/boy.svg';
import Family from '../assets/family.svg';

const Proposito = () => {
  return (
    <div className="w-full h-full">
      <h2 className="line-before text-center">Nosso propósito</h2>
      <div className="container m-auto grid grid-cols-3 gap-5">
        <div className="border-2 rounded-lg p-5">
          <img src={Girl} alt="Menina" className="m-auto" />
          <p className="text-center">
            Levar saúde emocional às pessoas através da ampliação da visão sobre
            parentalidade consciente. Acreditamos no ser humano de forma
            integral: físico, mental e emocional!
          </p>
        </div>
        <div className="border-2 rounded-lg p-5">
          <img src={Boy} alt="Menino" className="m-auto" />
          <p className="text-center">
            Reduzir danos! Reeducar os adultos cuidadores (pais, mães, avós,
            tios, padrinhos etc.) para que, ao olhar para sua história, possam
            entender e quebrar o ciclo de violência transgeracional da qual
            foram criados e, assim, recriar uma nova história para educar.
          </p>
        </div>
        <div className="border-2 rounded-lg p-5">
          <img src={Family} alt="Familia" className="m-auto" />
          <p className="text-center">
            Democratizar as informações sobre parentalidade consciente para que
            os adultos cuidadores possam contribuir com a formação de uma nova e
            verdadeira geração mais saudável emocionalmente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposito;
