import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleMakeInstructorAdmin = (id, role) => {
    const data = {
      id,
      role: role,
    };

    fetch("http://localhost:5000/users", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            "Good Job!",
            "Instructor role added successfully",
            "success"
          );
          fetch("http://localhost:5000/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
        }
      });
  };

  return (
    <div className="mt-8 mb-20">
      <h2 className="text-2xl font-bold mb-6">Manage all users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-20">
                      <img src={user?.image} alt="image" />
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  <button
                    onClick={() =>
                      handleMakeInstructorAdmin(user?._id, "instructor")
                    }
                    disabled={user?.role === "instructor"}
                    className="btn-xs btn btn-info mr-1"
                  >
                    Make Instructor
                  </button>
                  <button
                    onClick={() =>
                      handleMakeInstructorAdmin(user?._id, "admin")
                    }
                    disabled={user?.role === "admin"}
                    className="btn-xs btn btn-warning"
                  >
                    Make Admin
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

export default ManageUsers;
