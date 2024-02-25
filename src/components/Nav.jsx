import Logo from '../assets/logo.svg';
import { BsWhatsapp } from 'react-icons/bs';

const Nav = () => {
  return (
    <div className="w-full fixed z-10">
      <nav className="container m-auto flex items-center justify-between pt-3 pb-3 ">
        <a href="">
          <img src={Logo} width={160} alt="Logo Parentallis" />
        </a>
        <ul className="flex gap-6 menu">
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
          <a href="" className="bg-green-400 flex items-center text-lg p-3">
            <BsWhatsapp />
            Contato
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
