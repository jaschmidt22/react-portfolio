//import the necessary modules
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./Pages/Error.jsx";
import About from "./Pages/About/About.jsx";
// import Contact from "./pages/Contact/Contact.jsx";
import Portfolio from "./Pages/Portfolio/Portfolio.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import "./main.css";

//create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, //this is the default route
        path: "/",
        element: <About />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      // {
      //   path: "/Contact",
      //   element: <Contact />,
      // },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

//render the router
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
