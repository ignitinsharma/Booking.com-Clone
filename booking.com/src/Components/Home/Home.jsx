import Carousel from "../Carousel/Carousel";
import FeatureList from "../FeaturedGrid/FeatureList";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <br />
      <br />
      <div className="FeatureListContainer">
        <FeatureList />
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
