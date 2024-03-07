import { FaLinkedin, FaSpotify, FaYoutube } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#283959]">
      <div className="container m-auto flex justify-center margin-lateral">
        <div className="bg-[#8EA3BF] rounded-xl relative -top-16 w-full max-w-xl p-5">
          <h2 className="text-center text-2xl font-bold lg:text-4xl text-[#283959]">
            Quer saber mais?
          </h2>
          <p className="text-center text-white">
            Clique aqui para falar com a gente
          </p>
          <div className="bg-white flex items-center rounded-lg justify-between p-3">
            <div className="flex items-center gap-3">
              <BsWhatsapp className="text-3xl" />
              Falar com a Parentallis
            </div>
            <a href="" className="h-full p-3 bg-[#0B2550] text-white">
              Clique aqui
            </a>
          </div>
        </div>
      </div>
      <div className="container m-auto lg:flex justify-between items-center text-white  pb-5">
        <p className="text-center">
          © Parentallis 2023 - Todos os direitos reservados
        </p>
        <div className="md:flex items-center gap-24 text-2xl text-[#F29F8D]">
          <div className="flex gap-3 items-center justify-center">
            <MdEmail />
            <p className="text-white">parentallis@outlook.com</p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <a href="">
              <FaYoutube />
            </a>
            <a href="">
              <FaSpotify />
            </a>
            <a href="">
              <AiFillInstagram />
            </a>
            <a href="">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
