import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "./compoent/blog/Blog";
import BlogDetail from "./compoent/blogDetail/BlogDetail";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Favourite from "./compoent/favourite/Favourite";
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Blog />,
    },
    {
      path: "/:id",
      element: <BlogDetail />,
    },
    {
      path: "/favourite",
      element: <Favourite />,
    },
  ]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
