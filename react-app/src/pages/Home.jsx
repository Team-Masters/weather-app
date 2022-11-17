import Navbar from "../components/Navbar";
import { GetWeather } from "../API/GetWeather";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div>
          <Navbar />
        </div>
        <div>{GetWeather()}</div>
      </div>
    </>
  );
};

export default Home;
