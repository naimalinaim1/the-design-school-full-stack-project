import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import useUser from "../../../hooks/useUser";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  useTitle("Admin Dashboard");
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    const checkAdmin = async () => {
      const res = await fetch(
        `https://final-project-12-server.vercel.app/users/${user.email}`
      );
      const data = await res.json();
      if (data.role !== "admin") navigate("/login");
    };
    checkAdmin();
  }, [navigate, user.email]);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-6 mt-10">
        Admin dashboard
      </h2>
      <div className="flex justify-center mb-20">
        <img src="https://i.ibb.co/zJCXH7K/2023-06-10-7-copy.jpg" alt="" />
      </div>
    </div>
  );
};

export default AdminDashboard;
