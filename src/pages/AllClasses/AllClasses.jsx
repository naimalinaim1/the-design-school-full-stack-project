import useTitle from "../../hooks/useTitle";
import { useState, useEffect } from "react";

const AllClasses = () => {
  useTitle("Classes");

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    setClasses(["", "", "", "", "", "", "", ""]);
  }, []);

  return (
    <div className="mt-6 mb-64">
      <h2 className="text-5xl leading-[64px] font-bold text-center">
        View All <br />
        Classes
      </h2>
      <div className="mt-10 grid px-10 sm:px-8 md:px-5 xl:px-3 gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {classes?.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="h-[230px]">
              <img className="sm:w-[80%] mx-auto" src={item?.image} alt="" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Class Name: {item?.className}</h2>
              <p>Instructor Name: {item?.instructorName}</p>
              <p>Available seats: {item?.seats}</p>
              <p>Price: {item?.price}</p>
              <div className="card-actions justify-end">
                <button className="btn">Select Course</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
