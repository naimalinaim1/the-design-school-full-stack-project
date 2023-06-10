import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useTitle("My classes");

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [classes]);

  return (
    <div className="mt-8 mb-20">
      <h2 className="text-2xl font-bold mb-6">Manage all classes</h2>
      <div className="overflow-x-auto min-w-[1000px]">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {["", "", ""].map((i, idx) => (
              <tr key={idx}>
                <td>1</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img src={""} alt="image" />
                    </div>
                  </div>
                </td>
                <td>class name</td>
                <td>Instructor name</td>
                <td>Instructor email</td>
                <td>120</td>
                <td>$120</td>
                <td>pending</td>
                <td>
                  <button className="btn-xs btn btn-warning">Approve</button>
                  <button className="btn-xs btn btn-error mx-1">Deny</button>
                  <button className="btn-xs btn btn-neutral">
                    send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
