import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
import { Fade } from "react-awesome-reveal";

const AdminLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/admin">
          <Fade cascade damping={0.1}>
            Dashboard
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="manageClasses">
          <Fade cascade damping={0.1}>
            Manage Classes
          </Fade>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="manageUsers">
          <Fade cascade damping={0.1}>
            Manage Users
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

export default AdminLayout;
