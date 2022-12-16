import FeatureList from "../FeaturedGrid/FeatureList";
import Footer from "../Footer/Footer";
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
      <Footer/>
    </div>
  );
};

export default Home;
