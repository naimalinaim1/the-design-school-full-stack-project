import { useState, useEffect } from "react";

const PopularInstuctor = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://final-project-12-server.vercel.app/popularInstructorUsers")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="mt-32 mb-32">
      <h2 className="text-4xl font-bold text-center mb-4">Top Instructor</h2>
      <p className="w-[60%] mx-auto text-center text-lg leading-7 text-gray-500 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id
        obcaecati reiciendis adipisci error delectus quisquam, tempore
        consequatur maxime quidem veniam consectetur culpa a expedita?
      </p>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto">
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

export default PopularInstuctor;
