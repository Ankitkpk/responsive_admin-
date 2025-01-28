
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Users from "./pages/users/Users";
import Login from "./pages/login/Login";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";


function App() {
  const Layout = () => {
    return (
      <div className="main">
      <Navbar/>
      <div className="container">
       <div className="menuContainer">
       <Menu/>
       </div>
       <div className="contentcontainer">
       <Outlet/>
       </div>

      </div>
      <Footer/>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element:<Products/>
        },
      ],
    },
    {
      path: "/login",
      element: <Login/>,
    }
  ]);

  return <RouterProvider router={router} />;
}
export default App;

