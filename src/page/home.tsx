import Banner from "../components/banner";
import RecentBooks from "../components/recentBooks";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="px-6 py-6 sm:px-12 sm:py-12">
        <RecentBooks />
      </div>
    </div>
  );
};

export default Home;
