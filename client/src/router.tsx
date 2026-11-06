import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { SummaryPage } from "./features/summary/SummaryPage";

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <SummaryPage/>}
    ]
  }
])
