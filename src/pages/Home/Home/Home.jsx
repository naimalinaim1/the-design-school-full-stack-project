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
      <Banner />
      <Classes />
      <PopularInstuctor />
      <Activite />
    </>
  );
};

export default Home;
