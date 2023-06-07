import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";

const AdminLayout = () => {
  const navLink = (
    <>
      <li>
        <ActiveLink option={true} to="/dashboard/admin">
          Dashboard
        </ActiveLink>
      </li>
      <li>
        <ActiveLink to="manageClasses">Manage Classes</ActiveLink>
      </li>
      <li>
        <ActiveLink to="manageUsers">Manage Users</ActiveLink>
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
