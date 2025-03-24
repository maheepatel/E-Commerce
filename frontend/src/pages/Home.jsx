import Hero from "../components/Hero";
import BestSeller from "../components/BestSeller";
import LatestCollection from "../components/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
