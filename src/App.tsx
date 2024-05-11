import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage, AboutPage, MenuPage } from "./pages";
import { Layout } from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
