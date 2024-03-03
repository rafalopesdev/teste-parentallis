import Logo from '../assets/logo.svg';
import { BsWhatsapp } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { useEffect, useState } from 'react';

const Nav = () => {
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
    <div className={header ? 'bg-green-500 fixed w-full z-20' : 'bg-blue-500'}>
      <nav className="container m-auto flex items-center justify-between pt-3 pb-3 ">
        <a href="" className={header ? 'hidden' : 'block'}>
          <img src={Logo} width={160} alt="Logo Parentallis" />
        </a>
        <h2 className={header ? 'block' : 'hidden'}>Parentallis</h2>
        <ul className="hidden lg:flex items-center gap-6 menu">
          <li>
            <a href="#video">Educação Parentall</a>
          </li>
          <li>
            <a href="#about">Sobre a Parentallis</a>
          </li>
          <li>
            <a href="#consultoria">Nossa Consultoria</a>
          </li>
          <li>
            <a href="#produto">Nossos Produtos</a>
          </li>
          <a
            href=""
            className="btn-whats-nav bg-green-400 flex items-center gap-1 rounded-full"
          >
            <BsWhatsapp />
            Contato
          </a>
        </ul>

        <a href="" className="text-2xl lg:hidden">
          <BiMenu />
        </a>
      </nav>
    </div>
  );
};

export default Nav;
