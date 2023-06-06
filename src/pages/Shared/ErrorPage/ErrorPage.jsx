import { Link } from "react-router-dom";
import errorImage from "../../../assets/error-img.jpg";
import useTitle from "../../../hooks/useTitle";
const ErrorPage = () => {
  // change title
  useTitle("Page Not found");

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <img className="w-[550px]" src={errorImage} alt="" />
        <Link to="/" className="btn btn-error">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
