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
      // Instructor dashboard
      {
        path: "/dashboard/instructors",
        element: <InstructorLayout />,
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
    ],
  },
]);

export default router;
