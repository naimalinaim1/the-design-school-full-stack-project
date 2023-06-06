import useTitle from "../../../hooks/useTitle";

const Home = () => {
  // change title
  useTitle("Home");

  return (
    <div>
      <h2>home</h2>
    </div>
  );
};

export default Home;
