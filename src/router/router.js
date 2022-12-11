import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MyProjects from "../components/MyProjects/MyProjects";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import Project01 from "../components/Projects/Project01/Project01";
import Project02 from "../components/Projects/Project02/Project02";
import Project03 from "../components/Projects/Project03/Project03";
import Main from "../Main/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/project/01',
                element: <Project01/>,
            },
            {
                path: '/project/02',
                element: <Project02/>,
            },
            {
                path: '/project/03',
                element: <Project03/>,
            },
            {
                path: '/project/:id',
                element: <ProjectDetails/>,
            },
        ]
    }
])

export default router;