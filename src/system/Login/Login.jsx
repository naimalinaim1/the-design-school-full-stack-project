import useTitle from "../../hooks/useTitle";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContent } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { userLogin, googleLogin } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // change title
  useTitle("Login");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then(() => {
        // redirect home page
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="card w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-body shadow-2xl rounded w-[90%] max-w-[600px] h-auto mx-auto mt-20 mb-36"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="flex gap-2 items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input input-bordered w-full"
              {...register("password", {
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                  message:
                    "Password must be at least 6 characters long, contain a capital letter, and a special character",
                },
                required: true,
              })}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>
        {error && <p className="text-red-500">{error}</p>}

        {/* continue with google */}
        <div className="divider">OR</div>
        <div className="flex justify-center">
          <div
            onClick={handleGoogleLogin}
            className="cursor-pointer flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded"
          >
            <img
              src="https://i.ibb.co/P6P8Cfr/google.png"
              alt="Google Logo"
              className="w-4 h-4 mr-2"
            />
            <span className="text-gray-700">Continue with Google</span>
          </div>
        </div>

        {/* go login page */}
        <p className="text-center text-gray-600 mt-4">
          New User go to{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
