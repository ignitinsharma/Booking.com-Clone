import ExploreIndia from "../CarouselComponent/ExploreIndia";
import FeatureList from "../FeaturedGrid/FeatureList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { HomeGuestLove } from "./HomeGuestLove";

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
      {/* <CarouselMain/> */}
      <br />
      <HomeGuestLove />
      <div className="CarouselContainer">
        <h1 className="ExploreIndiaH1">Explore Cities</h1>
        <ExploreIndia/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
