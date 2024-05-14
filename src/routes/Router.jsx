import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddJob from "../pages/AddJob";
import Myjob from "../pages/Myjob";
import AllJobs from "../pages/AllJobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../pages/JobDetails";
import UpdateJob from "../pages/UpdateJob";
import ErrorPage from "../pages/ErrorPage";
import Profile from "../pages/Profile";
import AppliedJobs from "../pages/AppliedJobs";
import Blog from "../pages/Blog";
import BlogDetails from "../components/BlogDetails";

export const router = createBrowserRouter([
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-job",
        element: <Myjob />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blog />,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/blogs`),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`),
      },
    ],
  },
]);
