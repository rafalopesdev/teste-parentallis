import Logo from '../assets/logo.svg';
import { BsWhatsapp } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className="w-full fixed z-10">
      <nav className="container m-auto flex items-center justify-between pt-3 pb-3 ">
        <a href="">
          <img src={Logo} width={160} alt="Logo Parentallis" />
        </a>
        <ul className="flex items-center gap-6 menu">
          <li>
            <a href="">Educação Parentall</a>
          </li>
          <li>
            <a href="">Sobre a Parentallis</a>
          </li>
          <li>
            <a href="">Nossa Consultoria</a>
          </li>
          <li>
            <a href="">Nossos Produtos</a>
          </li>
          <a
            href=""
            className="btn-whats-nav bg-green-400 flex items-center gap-1 rounded-full"
          >
            <BsWhatsapp />
            Contato
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
