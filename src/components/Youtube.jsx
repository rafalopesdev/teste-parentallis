const Youtube = () => {
  return (
    <div className="spacer w-full h-full">
      <div className="container m-auto margin-lateral">
        <h2 className="text-center text-2xl font-bold lg:text-4xl text-[#69688C]">
          Veja nosso canal no YoutTube
        </h2>
        <div className="md:grid grid-cols-3 gap-5">
          <div className="text-center">
            <iframe
              src="https://www.youtube.com/embed/RH0loOIXk3k?si=1GAmgZtYLp2DqSCD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="box-video-yt"
            ></iframe>
            <a href="">text aqui</a>
          </div>
          <div className="text-center">
            <iframe
              src="https://www.youtube.com/embed/RH0loOIXk3k?si=pqO4l99KzaMVOnoD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="box-video-yt"
            ></iframe>
            <a href="">text aqui</a>
          </div>
          <div className="text-center">
            <iframe
              src="https://www.youtube.com/embed/ZzVsmswoV7s?si=c9TVTmEl4aqSeN4A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="box-video-yt"
            ></iframe>
            <a href="">text aqui</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
