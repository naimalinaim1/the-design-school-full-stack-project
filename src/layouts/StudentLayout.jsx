import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
import { Fade } from "react-awesome-reveal";
const StudentLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/student">
          <Fade cascade damping={0.1}>
            Dashboard
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="selectClasses">
          <Fade cascade damping={0.1}>
            Selected Classes
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="enrolledClasses">
          <Fade cascade damping={0.1}>
            Enrolled Classes
          </Fade>
        </ActiveLink>
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
