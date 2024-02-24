const Video = () => {
  return (
    <div className="container m-auto">
      <h2 className="text-center line-before">O que é a Educação Parental?</h2>
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/TpIZcKaUy6A?si=94yhz4l6JvxVGstI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="m-auto"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
