import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [classes, setClasses] = useState([]);
  useTitle("My classes");

  useEffect(() => {
    fetch("https://final-project-12-server.vercel.app/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [classes]);

  const changeStatus = (id, status) => {
    const data = { id, status: status };

    fetch("https://final-project-12-server.vercel.app/classes", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Good Job!", "Status update successfully", "success");
          fetch("https://final-project-12-server.vercel.app/classes")
            .then((res) => res.json())
            .then((data) => setClasses(data));
        }
      });
  };

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
            {classes.map((i, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img src={i.image} alt="image" />
                    </div>
                  </div>
                </td>
                <td>{i.className}</td>
                <td>{i.instructorName}</td>
                <td>{i.instructorEmail}</td>
                <td>{i.enrolled}</td>
                <td>{i.price}</td>
                <td>{i.status}</td>
                <td>
                  <button
                    className="btn-xs btn btn-warning"
                    onClick={() => changeStatus(i._id, "approve")}
                  >
                    Approve
                  </button>
                  <button
                    className="btn-xs btn btn-error mx-1"
                    onClick={() => changeStatus(i._id, "deny")}
                  >
                    Deny
                  </button>
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
