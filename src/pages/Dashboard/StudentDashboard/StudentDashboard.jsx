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
      <h2 className="text-4xl font-bold text-center mb-6 mt-10">
        Student Dashboard
      </h2>
      <div className="flex justify-center mb-20">
        <img src="https://i.ibb.co/zJCXH7K/2023-06-10-7-copy.jpg" alt="" />
      </div>
    </div>
  );
};

export default StudentDashboard;
