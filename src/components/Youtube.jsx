const Youtube = () => {
  return (
    <div className="spacer w-full h-full">
      <h2 className="text-center text-2xl font-bold lg:text-4xl text-[#69688C]">
        Veja nosso canal no YoutTube
      </h2>
      <div className="container m-auto grid lg:grid-cols-3">
        <div>
          <iframe
            src="https://www.youtube.com/embed/RH0loOIXk3k?si=1GAmgZtYLp2DqSCD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <a href="" className="block text-center">
            Adolescência: uma fase de muita transformação
          </a>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/RH0loOIXk3k?si=pqO4l99KzaMVOnoD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <a href="">Adolescência: uma fase de muita transformação</a>
        </div>
        <div>
          <iframe
            src="https://www.youtube.com/embed/ZzVsmswoV7s?si=c9TVTmEl4aqSeN4A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <a href="" className="block text-center">
            Como estabelecer limites ao meu filho de uma forma respeitosa?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
