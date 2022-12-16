// import CarouselMain from "../Carousel/CarouselMain";
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
      <HomeGuestLove/>
      <Footer/>
    </div>
  );
};

export default Home;
