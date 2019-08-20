import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ServerErrorPage from '../Pages/ServerErrorPage/ServerErrorPage';
import UnAuthorizedPage from '../Pages/UnAuthorizedPage/UnAuthorizedPage';

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
        path: "/pages/error/server-error",
        exact: true,
        main: ServerErrorPage
    },
    {
        path: "/pages/error/unauthorized-error",
        exact: true,
        main: UnAuthorizedPage
    },
    {
        main: NotFoundPage
    }
];

export default routes;