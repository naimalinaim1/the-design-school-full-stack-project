import useTitle from "../../../hooks/useTitle";
import Activite from "../Activite/Activite";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";
import PopularInstuctor from "../PopularInstuctor/PopularInstuctor";

const Home = () => {
  // change title
  useTitle("Home");

  return (
    <>
      <div>
        <img src="https://i.ibb.co/pj1jpvy/15694384-5660768.jpg" alt="" />
      </div>
      <Banner />
      <Classes />
      <PopularInstuctor />
      <Activite />
    </>
  );
};

export default Home;
