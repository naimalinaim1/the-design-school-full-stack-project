import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  const navLink = (
    <>
      <li>
        <Link to="/dashboard/admin">Dashboard</Link>
      </li>
      <li>
        <Link to="manageClasses">Manage Classes</Link>
      </li>
      <li>
        <Link to="manageUsers">Manage Users</Link>
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
