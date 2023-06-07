import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ActiveLink = ({ option, to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? (option ? "text-blue-800" : "text-blue-500") : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
