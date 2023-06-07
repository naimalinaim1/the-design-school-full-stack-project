import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Classes from "../Classes/Classes";

const Home = () => {
  // change title
  useTitle("Home");

  return (
    <>
      <Banner />
      <Classes />
    </>
  );
};

export default Home;
