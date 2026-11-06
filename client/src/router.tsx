import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { SummaryPage } from "./features/summary/SummaryPage";
import { ProjectsPage } from "./features/projects/ProjectsPage";
import { ExperiencePage } from "./features/experience/ExperiencePage";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <SummaryPage/>},
      {path: 'projects', element: <ProjectsPage/>},
      {path: 'experience', element: <ExperiencePage/>}
    ]
  }
])
