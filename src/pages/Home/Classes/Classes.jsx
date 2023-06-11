import { useEffect, useState } from "react";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("https://final-project-12-server.vercel.app/popularClasses")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-4">Top Classes</h2>
      <p className="w-[60%] mx-auto text-center text-lg leading-7 text-gray-500 mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia id
        obcaecati reiciendis adipisci error delectus quisquam, tempore
        consequatur maxime quidem veniam consectetur culpa a expedita?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-[80%] mx-auto">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
