import useTitle from "../../../hooks/useTitle";
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
    </>
  );
};

export default Home;
