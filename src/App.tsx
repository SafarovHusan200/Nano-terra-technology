import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import SignUp from "./pages/signUp/SignUp";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import "./styles/global.scss";
import Employees from "./pages/employees/Employees";
import Tasks from "./pages/tasks/Tasks";
import UserInfo from "./pages/user-info/UserInfo";
import UserKpi from "./pages/user-kpi/UserKpi";
import Setting from "./pages/setting/Setting";

const queryClient = new QueryClient();
function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Menu />
        <div className="container">
          <div className="menuContainer">
            <Navbar />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet></Outlet>
            </QueryClientProvider>
          </div>
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "dashboard",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "employees",
          element: <Employees />,
        },
        {
          path: "tasks",
          element: <Tasks />,
        },
        {
          path: "user-info",
          element: <UserInfo />,
        },
        {
          path: "user-kpi",
          element: <UserKpi />,
        },
        {
          path: "settings",
          element: <Setting />,
        },
      ],
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
