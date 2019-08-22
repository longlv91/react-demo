import HomePage from '../Pages/HomePage/HomePage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';
import ServerErrorPage from '../Pages/ServerErrorPage/ServerErrorPage';
import UnAuthorizedPage from '../Pages/UnAuthorizedPage/UnAuthorizedPage';
import AnalyticsDashboardPage from '../Pages/DashboardPage/AnalyticsDashboardPage';
import ProjectDashboardPage from '../Pages/DashboardPage/ProjectDashboardPage';
import CalendarPage from '../Pages/CalendarPage/CalendarPage';
import ChangelogPage from '../Pages/ChangelogPage/ChangelogPage';
import RegisterPage from '../Pages/RegisterPage/RegisterPage';

const routes = [
    {
        path: "/",
        exact: true,
        main: HomePage
    },
    {
        path: "/apps/dashboards/analytics",
        exact: true,
        main: AnalyticsDashboardPage
    },
    {
        path: "/apps/dashboards/project",
        exact: true,
        main: ProjectDashboardPage
    },
    {
        path: "/apps/calendar",
        exact: true,
        main: CalendarPage
    },
    {
        path: "/pages/authentication/login",
        exact: true,
        main: LoginPage
    },
    {
        path: "/pages/authentication/register",
        exact: true,
        main: RegisterPage
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
        path: "/docs/changelog",
        exact: true,
        main: ChangelogPage
    },
    {
        main: NotFoundPage
    }
];

export default routes;