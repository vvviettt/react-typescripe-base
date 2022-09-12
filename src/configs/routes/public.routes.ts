import { Route } from '@root/common/typeData';
import AuthenticationLayout from '@root/layouts/AuthenticationLayout';
import Login from '@root/pages/Login';
import Registry from '@root/pages/Register';

const publicRoutes: Route[] = [
    {
        path: 'auth/login',
        element: Login,
        layout: AuthenticationLayout,
    },
    {
        path: 'auth/registry',
        element: Registry,
        layout: AuthenticationLayout,
    },
];

export default publicRoutes;
