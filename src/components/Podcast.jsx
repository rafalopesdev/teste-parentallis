import Podcast1 from '../assets/podcast1.jpg';
import Podcast2 from '../assets/podcast2.jpg';
import Podcast3 from '../assets/podcast3.jpg';
import Podcast4 from '../assets/podcast4.jpg';

const Podcast = () => {
  return (
    <div className="w-full h-full bg-red-500">
      <h2 className="text-center text-2xl font-bold lg:text-4xl text-[#69688C]">
        Ouça o nosso Podcast
      </h2>
      <div className="container m-auto grid lg:grid-cols-4 justify-between gap-5">
        <div>
          <a href="" className="text-center block">
            <img src={Podcast1} alt="Podcast" />
            Comportamento infantis: o que esperar em cada fase!
          </a>
        </div>
        <div className="">
          <a href="" className="text-center block">
            <img src={Podcast2} alt="Podcast" className="block m-auto" />
            Você pede desculpas para seus filhos?
          </a>
        </div>
        <div>
          <a href="" className="text-center block">
            <img src={Podcast3} alt="Podcast" />
            Devemos normalizar acalmar nossas crianças
          </a>
        </div>
        <div className="">
          <a href="" className="text-center block">
            <img src={Podcast4} alt="Podcast" className="" />
            Você sabe o que os comportamentos dos seus filhos realmente
            significam?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
