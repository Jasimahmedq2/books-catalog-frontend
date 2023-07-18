import { Link } from "react-router-dom";
import BackgroundVideo from "./backroundVideo";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <BackgroundVideo />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Books Lover,,</h1>
          <h1 className="mb-5 text-5xl font-bold">
            Your Ultimate Guide to Literary Treasures
          </h1>
          <Link to="/book" className="btn btn-accent text-white">
            list books
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
