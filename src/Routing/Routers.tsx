import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

const routes = [
    {
        path: "/",
        exact: true,
        main: HomePage
    },
    {
        path: "/apps/dashboards/analytics",
        exact: true,
        main: HomePage
    },
    {
        path: "/pages/authentication/login",
        exact: true,
        main: LoginPage
    },
    {
        main: NotFoundPage
    }
];

export default routes;