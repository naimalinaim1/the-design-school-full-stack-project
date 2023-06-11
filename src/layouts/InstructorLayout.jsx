import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
import { Fade } from "react-awesome-reveal";

const InstructorLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/instructor">
          <Fade cascade damping={0.1}>
            Dashboard
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="addClass">
          <Fade cascade damping={0.1}>
            Add Class
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="myClasses">
          <Fade cascade damping={0.1}>
            My Classes
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

export default InstructorLayout;
