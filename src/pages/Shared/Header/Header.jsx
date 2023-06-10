import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContent } from "../../../provider/AuthProvider";
import ActiveLink from "../../../components/ActiveLink";
const Header = () => {
  const { user, userLogout } = useContext(AuthContent);
  const [dashboardLink, setDashboardLink] = useState("student");

  useEffect(() => {
    if (user?.email) {
      const getRole = async () => {
        const res = await fetch(`http://localhost:5000/users/${user.email}`);
        const data = await res.json();
        setDashboardLink(data.role);
      };
      getRole();
    }
  }, [user?.email]);

  const navLink = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructors">Instructors</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      {user?.email ? (
        <>
          <li>
            <ActiveLink to={`/dashboard/${dashboardLink}`}>
              Dashboard
            </ActiveLink>
          </li>
          <li>
            <p className="cursor-pointer" onClick={userLogout}>
              Logout
            </p>
          </li>
          <li>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          </li>
        </>
      ) : (
        <li>
          <ActiveLink to="/login">Login</ActiveLink>
        </li>
      )}
    </>
  );
  return (
    <header className="w-[96%] max-w-[1280px] mx-auto">
      <div className="navbar px-0 py-3">
        <div className="navbar-start w-full lg:w-[50%]">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link className="text-3xl font-bold" to="/">
            The Design School
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="flex items-center gap-5 px-1 text-lg font-semibold">
            {navLink}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
