import useTitle from "../../hooks/useTitle";
import { useState, useEffect } from "react";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  useTitle("All Classes");

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

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
                <button className="btn" disabled={item?.seats <= 0}>
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
