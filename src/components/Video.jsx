const Video = () => {
  return (
    <div className="w-full h-full spacer">
      <div className="container m-auto margin-lateral" id="video">
        <h2 className="text-center text-2xl font-bold lg:text-4xl line-before text-[#69688C]">
          O que é a Educação Parental?
        </h2>
        <iframe
          src="https://www.youtube.com/embed/TpIZcKaUy6A?si=94yhz4l6JvxVGstI"
          title="YouTube video player"
          // frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          height="400"
          className="m-auto video-fernanda"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
