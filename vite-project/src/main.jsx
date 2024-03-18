import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Error from "./pages/Error";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Resume from "./Pages/Resume/Resume.jsx";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/About",
        element: <About />,
      },
      {
        path: "/Portfolio",
        element: <Portfolio />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Resume",
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);