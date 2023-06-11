import { useEffect, useState } from "react";
import useTitle from "../../../hooks/useTitle";
import useUser from "../../../hooks/useUser";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [classes, setClasses] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useUser();
  useTitle("Selected Class");

  useEffect(() => {
    fetch(
      `https://final-project-12-server.vercel.app/selectCourse?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, [user?.email]);

  const handleDeleteClass = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://final-project-12-server.vercel.app/selectCourse/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              fetch(
                `https://final-project-12-server.vercel.app/selectCourse?email=${user?.email}`
              )
                .then((res) => res.json())
                .then((data) => setClasses(data));
              Swal.fire(
                "Deleted!",
                "Your selected class has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  useEffect(() => {
    const total = classes?.result?.reduce((acc, curr) => acc + curr.price, 0);
    setTotal(total);
  }, [classes]);

  return (
    <div className="container mx-auto p-4 mt-10 mb-24">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between px-4">
          <h2 className="text-center text-lg font-bold mb-4">
            Total Selected class: {classes?.result?.length}
          </h2>
          <button className="btn btn-sm btn-warning">
            Pay ${total?.toFixed(2)}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {classes?.result?.map((c, idx) => (
                <tr key={c?._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-20 h-20">
                        <img src={c?.image} alt="image" />
                      </div>
                    </div>
                  </td>
                  <td>{c.className}</td>
                  <td className="text-right">${c.price}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleDeleteClass(classes.selectedClass[idx]?._id)
                      }
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectedClasses;
