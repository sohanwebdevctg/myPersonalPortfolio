import { createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../MainLayout/MainLayout";
import Contact from "../Pages/Contact/Contact";

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
        path: '/contact',
        element : <Contact></Contact>
      },
    ]
  },
]);