const ManageUsers = () => {
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
                <td>name</td>
                <td>email</td>
                <td>
                  <button className="btn-xs btn btn-info mr-1">
                    Make Instructor
                  </button>
                  <button className="btn-xs btn btn-warning">Make Admin</button>
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
