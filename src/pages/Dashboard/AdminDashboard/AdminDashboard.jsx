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
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      const data = await res.json();
      if (data.role !== "admin") navigate("/login");
    };
    checkAdmin();
  }, [navigate, user.email]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
    </div>
  );
};

export default AdminDashboard;
