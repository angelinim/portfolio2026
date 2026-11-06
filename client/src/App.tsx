import { RouterProvider } from 'react-router';
import { Router } from './router';
// import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
