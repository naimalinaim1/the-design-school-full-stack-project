import { Outlet, Link } from "react-router-dom";

const InstructorLayout = () => {
  const navLink = (
    <>
      <li>
        <Link to="/dashboard/instructors">Dashboard</Link>
      </li>
      <li>
        <Link to="addClass">Add Class</Link>
      </li>
      <li>
        <Link to="myClasses">My Classes</Link>
      </li>
    </>
  );

  return (
    <div>
      <nav className="w-[96%] max-w-[1280px] mx-auto">
        <ul className="flex justify-center gap-6 text-lg font-semibold">
          {navLink}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default InstructorLayout;
