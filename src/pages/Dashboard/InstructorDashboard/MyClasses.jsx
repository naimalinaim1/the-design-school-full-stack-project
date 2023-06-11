import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
const MyClasses = () => {
  const [classes, setClasses] = useState([]);
  useTitle("My classes");

  useEffect(() => {
    fetch("https://final-project-12-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4 mt-10 mb-24">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-md shadow-md">
          <h2 className="text-center text-lg font-bold mb-4">
            Total My class: {classes?.length}
          </h2>
          {classes.map((c) => (
            <div
              key={c._id}
              className="flex justify-between mb-4 pb-4 border-b"
            >
              <div>
                <h3 className="font-semibold">{c.className}</h3>
                <div className="text-sm mb-1">
                  Status: <span className="text-blue-500">{c.status}</span>
                </div>
                <p className="text-sm mb-1">
                  Total Enrolled Students: {c.enrolled}
                </p>
                <p className="text-sm mb-4">Feedback: {c.feedback}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2">
                  Update
                </button>
              </div>
              <img className="w-36 " src={c.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
