import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../pages/About/About";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import JobTest from "../pages/JobTest/JobTest";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/job-test",
                element: <JobTest />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog-details",
                element: <BlogDetails />,
            },
        ],
    },
]);

export default routes;