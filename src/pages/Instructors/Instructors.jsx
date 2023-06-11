import axios from "axios";
import useTitle from "../../hooks/useTitle";
import { useState, useEffect } from "react";

const Instructors = () => {
  useTitle("Instructors");

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    const res = axios.get(
      "https://final-project-12-server.vercel.app/instructorUsers"
    );
    const data = res.data;
    setInstructors(data);
  }, []);

  return (
    <div className="mt-6 mb-64">
      <h2 className="text-5xl leading-[64px] font-bold text-center">
        View All <br />
        Instructors
      </h2>
      <div className="mt-10 grid px-10 sm:px-8 md:px-5 xl:px-3 gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {instructors?.map((instructor, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure className="h-[230px]">
              <img
                className="sm:w-[80%] mx-auto"
                src={instructor?.image}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor?.name}</h2>
              <p>{instructor?.email}</p>
              <p>
                Type: <strong>Instructor</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
