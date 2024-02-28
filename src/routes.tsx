import {createBrowserRouter} from "react-router-dom";
import AuthPage from "./pages/AuthPage.tsx";
import Layout from "./components/layout/Layout.tsx";
import MediaPage from "./pages/MediaPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthPage/>,
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <MediaPage />,
            }
        ],
    },
])