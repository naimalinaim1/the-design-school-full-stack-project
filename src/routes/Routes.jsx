import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Register from "../system/Register/Register";
import Login from "../system/Login/Login";
import Instructors from "../pages/Instructors/Instructors";
import AllClasses from "../pages/AllClasses/AllClasses";
import InstructorLayout from "../layouts/InstructorLayout";
import InstructorDashboard from "../pages/Dashboard/InstructorDashboard/InstructorDashboard";
import AddClass from "../pages/Dashboard/InstructorDashboard/AddClass";
import MyClasses from "../pages/Dashboard/InstructorDashboard/MyClasses";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import ManageClasses from "../pages/Dashboard/AdminDashboard/ManageClasses";
import ManageUsers from "../pages/Dashboard/AdminDashboard/ManageUsers";
import StudentLayout from "../layouts/StudentLayout";
import StudentDashboard from "../pages/Dashboard/StudentDashboard/StudentDashboard";
import SelectedClasses from "../pages/Dashboard/StudentDashboard/SelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/StudentDashboard/MyEnrolledClasses";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <AllClasses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      // student dashboard
      {
        path: "/dashboard/student",
        element: (
          <PrivateRoute>
            <StudentLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <StudentDashboard />,
          },
          {
            path: "selectClasses",
            element: <SelectedClasses />,
          },
          {
            path: "enrolledClasses",
            element: <MyEnrolledClasses />,
          },
        ],
      },
      // Instructor dashboard
      {
        path: "/dashboard/instructors",
        element: (
          <PrivateRoute>
            <InstructorLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <InstructorDashboard />,
          },
          {
            path: "addClass",
            element: <AddClass />,
          },
          {
            path: "myClasses",
            element: <MyClasses />,
          },
        ],
      },
      // Admin dashboard
      {
        path: "/dashboard/admin",
        element: (
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <AdminDashboard />,
          },
          {
            path: "manageClasses",
            element: <ManageClasses />,
          },
          {
            path: "manageUsers",
            element: <ManageUsers />,
          },
        ],
      },
    ],
  },
]);

export default router;
