import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
const StudentLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/student">
          Dashboard
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="selectClasses">Selected Classes</ActiveLink>
      </li>
      <li>
        <ActiveLink to="enrolledClasses">Enrolled Classes</ActiveLink>
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
