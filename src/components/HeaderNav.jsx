import ImgFamilyTop from '../assets/mother.png';
import Logo from '../assets/logo.svg';
import { useEffect, useState } from 'react';
import { BiMenu } from 'react-icons/bi';

const HeaderNav = () => {
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.addEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={
          header
            ? 'w-full bg-[#69688C] fixed z-20'
            : 'w-full bg-[transparent] absolute'
        }
      >
        <div className="container m-auto">
          <nav className="w-full p-3 flex items-center justify-between">
            <img
              src={Logo}
              width={180}
              alt=""
              className={header ? 'hidden' : ''}
            />
            <span className={header ? 'text-[#F29F8D] text-3xl' : 'hidden'}>
              Parentallis
            </span>
            <ul className="block gap-[30px] hidden lg:flex text-white">
              <li>
                <a href="">Educação Parental</a>
              </li>
              <li>
                <a href="#about">Sobre a Parentallis</a>
              </li>
              <li>
                <a href="">Nossa Consultoria</a>
              </li>
              <li>
                <a href="">Nossos Produtos</a>
              </li>
              <a href="">Contato</a>
            </ul>
            <a href="" className="text-3xl lg:hidden text-[#F29F8D] pr-2">
              <BiMenu />
            </a>
          </nav>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="absolute container m-auto h-full flex items-center justify-center">
          <div className="container">
            <h1 className="text-[#F29F8D] text-2xl md:text-6xl text-center">
              EDUCAÇÃO POSITIVA E RESPEITOSA<br></br>ASSISTÊNCIA PARENTAL
            </h1>
            <span className="line text-center m-auto block text-white md:text-4xl font-light">
              Consultoria em Desenvolvimento Humano
            </span>
          </div>
        </div>
        <img
          src={ImgFamilyTop}
          alt=""
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default HeaderNav;
