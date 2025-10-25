// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Components from '../pages/Components';
// Components
import Layout from '../components/Layout';
// React Router Dom
import { useRoutes } from 'react-router-dom'

export default function AppRoutes(){
    return useRoutes([{
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            {path: "/about", element: <About />},
            {path: "/projects", element: <Projects />},
            {path: "/components", element: <Components />}
        ]
    }]);
};

