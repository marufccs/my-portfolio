import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MyProjects from "../components/MyProjects/MyProjects";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
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
                path: '/project/:id',
                element: <ProjectDetails/>, 
            },
            {
                path: '/myprojects',
                element: <MyProjects/>, 
            },
        ]
    }
])

export default router;