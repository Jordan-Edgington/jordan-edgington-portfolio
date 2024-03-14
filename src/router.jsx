// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { 
        path: '/about/',
        element: <AboutPage/>
      },
      {
        path: '/projects/',
        element: <ProjectsPage/>
      }
    ],
  },
]);

export default router;