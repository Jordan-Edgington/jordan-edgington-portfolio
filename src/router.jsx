// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./HomePage";
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
const router = createBrowserRouter([
  {
    path: "/jordan-edgington-portfolio/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { 
        path: '/jordan-edgington-portfolio/about/',
        element: <AboutPage/>
      },
      {
        path: '/jordan-edgington-portfolio/projects/',
        element: <ProjectsPage/>
      }
    ],
  },
]);

export default router;