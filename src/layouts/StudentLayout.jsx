import { Outlet, Link } from "react-router-dom";
const StudentLayout = () => {
  const navLink = (
    <>
      <li>
        <Link to="/dashboard/student">Dashboard</Link>
      </li>
      <li>
        <Link to="selectClasses">Selected Classes</Link>
      </li>
      <li>
        <Link to="enrolledClasses">Enrolled Classes</Link>
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

export default StudentLayout;
