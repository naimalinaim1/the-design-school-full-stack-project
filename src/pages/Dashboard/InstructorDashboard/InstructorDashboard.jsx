import { useNavigate } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import useUser from "../../../hooks/useUser";
import { useEffect } from "react";
const InstructorDashboard = () => {
  useTitle("Instructor Dashboard");
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    const checkAdmin = async () => {
      const res = await fetch(`http://localhost:5000/users/${user.email}`);
      const data = await res.json();
      if (data.role !== "instructor") navigate("/login");
    };
    checkAdmin();
  }, [navigate, user.email]);

  return (
    <div>
      <h2>Instructor dashboard</h2>
    </div>
  );
};

export default InstructorDashboard;
