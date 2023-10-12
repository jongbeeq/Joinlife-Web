import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage';
import TrendPage from '../pages/TrendPage';
import EventPage from '../pages/EventPage';
import ProfilePage from '../pages/ProfilePage';
import LoginPage from '../pages/LoginPage';
import Authenticated from '../features/auth/Authentication';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Authenticated>
                <Layout />
            </Authenticated>
        ),
        children: [
            { path: '', element: <HomePage /> },
            { path: 'search', element: <SearchPage /> },
            { path: 'trend', element: <TrendPage /> },
            { path: 'event/:eventId', element: <EventPage /> },
            { path: 'profile/:profileId', element: <ProfilePage /> },
        ]
    },
    {
        path: '/login',
        element: (
            <LoginPage />
        )
    }
])

export default function Route() {
    return <RouterProvider router={router} />;
}