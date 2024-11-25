import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import Service from "../Pages/Service/Service";
import About from "../Pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element : <Home></Home>
      },
      {
        path: '/about',
        element : <About></About>
      },
      {
        path: '/service',
        element : <Service></Service>
      },
      {
        path: '/contact',
        element : <Contact></Contact>
      },
    ]
  },
]);