import About from "../Homes/About/About";
import Banner from "../Homes/Banner/Banner";
import Services from "../Homes/Services/Services";

const Home = () => {
      return (
            <div className="space-y-2">
                  <Banner></Banner>
                  <About></About>
                  <Services></Services>
            </div>
      );
};

export default Home;