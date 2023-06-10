import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { useEffect } from "react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    const checkAdmin = async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      const data = await res.json();
      if (data.role !== "student") navigate("/login");
    };
    checkAdmin();
  }, [navigate, user.email]);

  return (
    <div>
      <h2>Student Dashboard</h2>
    </div>
  );
};

export default StudentDashboard;
