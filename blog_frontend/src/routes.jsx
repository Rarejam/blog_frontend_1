import App from "./App";
import IndexBlogs from "./routers/IndexBlogs";
import Index from "./routers/Index";
import Login from "./routers/Login";
import Signup from "./routers/Signup";
import Home from "./routers/Home";
import EachBlog from "./routers/EachBlog";
import HomeContent from "./Layouts/HomeContent";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/index_blogs",
        element: <IndexBlogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        index: true,
        element: <HomeContent />,
      },
      {
        path: ":id",
        element: <EachBlog />,
      },
    ],
  },
];
export default routes;
