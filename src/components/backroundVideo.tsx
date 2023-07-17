import video from "../assets/video/books.mp4";

const BackgroundVideo = () => {
  return (
    <div className="w-full h-full z-0">
      <video autoPlay loop muted className="object-cover w-full h-full">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
