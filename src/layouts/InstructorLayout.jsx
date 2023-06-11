import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

const InstructorLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/instructor">
          Dashboard
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="addClass">Add Class</ActiveLink>
      </li>
      <li>
        <ActiveLink to="myClasses">My Classes</ActiveLink>
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
