import useTitle from "../../hooks/useTitle";
import { useState, useEffect, useContext } from "react";
import { AuthContent } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const { user } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation();

  useTitle("All Classes");

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  const handleSelectCourse = (id) => {
    const email = user?.email;
    if (email) {
      const data = { email, classId: id };
      fetch("http://localhost:5000/selectCourse", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.insertedId) {
            Swal.fire("Good Job!", "Course selected successfully", "success");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "Please login then select course",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="mt-6 mb-64">
      <h2 className="text-4xl font-bold text-center">View All Classes</h2>
      <div className="mt-4 grid px-10 sm:px-8 md:px-5 xl:px-3 gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {classes?.map((item, index) => (
          <div
            key={index}
            className={`card bg-base-100 shadow-xl ${
              item?.seats <= 0 && "bg-red-400"
            }`}
          >
            <figure className="h-[230px]">
              <img className="sm:w-[80%] mx-auto" src={item?.image} alt="" />
            </figure>
            <div className="card-body px-3">
              <h2 className="card-title">{item?.className}</h2>
              <div className="space-y-1">
                <p>Instructor Name: {item?.instructorName}</p>
                <p>Available seats: {item?.seats}</p>
                <p>Price: ${item?.price}</p>
              </div>
              <div className="card-actions mt-auto justify-end">
                <button
                  onClick={() => handleSelectCourse(item?._id)}
                  className="btn"
                  disabled={item?.seats <= 0}
                >
                  Select Course
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
