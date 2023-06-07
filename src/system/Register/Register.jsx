import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import { AuthContent } from "../../provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContent);
  const navigate = useNavigate();
  // change title
  useTitle("Register");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        updateUser(data.name, data.photoUrl)
          .then(() => {
            // redirect home page
            navigate("/");
          })
          .catch((err) => setError(err.message));
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
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
        </div>
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
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered"
            {...register("password", {
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                message:
                  "Password must be at least 6 characters long, contain a capital letter, and a special character",
              },
              required: true,
            })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered"
            {...register("confirmPassword", {
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{6,})/,
                message:
                  "Password must be at least 6 characters long, contain a capital letter, and a special character",
              },
              validate: (value) =>
                value === password || "The confirm passwords do not match",
              required: true,
            })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="url"
            placeholder="https://www.host-image.com/user.jpg"
            className="input input-bordered"
            {...register("photoUrl", { required: true })}
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register" />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {/* go login page */}
        <p className="text-center text-gray-600 mt-4">
          All Ready have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
