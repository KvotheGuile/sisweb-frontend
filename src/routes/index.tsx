import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProductPage from '../pages/ProductPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'products', element: <ProductPage /> },
        ]
    },
    /*
    {

        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage /> },
        ]
    },//*/
]);

export default router;