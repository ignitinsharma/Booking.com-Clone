import BrowseBy from "../CarouselComponent/BrowseBy";
import ConnectTravelers from "../CarouselComponent/ConnectTravelers";
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
      <br />
      <div className="CarouselContainer">
        <h1 className="ExploreIndiaH1">Connect with other travellers</h1>
        <ConnectTravelers/>
      </div>
      {/* <CarouselMain/> */}
      <br />
      <HomeGuestLove />
      <div className="CarouselContainer">
        <h1 className="ExploreIndiaH1">Browse by property type</h1>
        <BrowseBy/>
      </div>
      <div className="CarouselContainer">
        <h1 className="ExploreIndiaH1">Explore Cities</h1>
        <ExploreIndia/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
