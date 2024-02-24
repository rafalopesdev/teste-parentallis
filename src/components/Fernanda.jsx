import React from 'react';
import FotoFernanda from '../assets/foto-fernanda.png';

const Fernanda = () => {
  return (
    <div className="w-full h-full">
      <div className="container m-auto grid grid-cols-2 gap-5 items-center justify-between">
        <div className="text-center">
          <h2 className="line-before title">
            Muito prazer, eu sou a Fernanda Bardela!
          </h2>
          <p>
            Fundadora da PARENTALLIS eHost do Podcast “DEU BIRRA, E AGORA?”.
          </p>
          <img src={FotoFernanda} alt="Fernanda Bardela" className="m-auto" />
        </div>
        <div className="">
          <p>
            Sou Mãe de um garotinho incrível que me ensina todos os dias e me
            inspirou em muitas mudanças pelas quais passei.
          </p>
          <p>
            Sou Educadora Parental, certificada internacionalmente pela Positive
            Discipline Association (PDA – EUA), além de outras complementações
            sobre Infância e Adolescência.
          </p>
          <p>
            Sou membro das associações americana e brasileira de Disciplina
            Positiva. Sou formada em Publicidade e Propaganda, também tenho
            graduação em Marketing, Especialização em Gestão Comercial e MBA em
            Administração de Empresas pela USP - Ribeirão Preto, onde aprofundei
            meus estudos para o Empreendedorismo e Inovação na área da Educação.
          </p>
          <p>
            Atuei por quase 25 anos como executiva em grandes empresas nacionais
            e multinacionais, gerindo equipes e negócios de alta relevância no
            país.
          </p>
          <p>
            E por isso reconheço tanto a realidade dos pais que trabalham
            intensamente e acabam não ficando conscientes no momento de se
            relacionarem com seus filhos.
          </p>
          <p>
            Decidi compartilhar e trazer à luz novos conceitos de Parentalidade
            Consciente, estabelecendo relações respeitosas entre adultos e
            crianças.
          </p>

          <a href="https://www.linkedin.com/in/fernandacyrillo/">
            Acessar LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fernanda;
