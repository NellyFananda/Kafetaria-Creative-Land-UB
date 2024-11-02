import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Order from "../pages/Order";
import Dashboard from "../pages/Dashboard";
import AddMenu from "../pages/AddMenu";
import MenuItemsList from "../pages/MenuItemsList";
import EditMenuItem from "../pages/EditMenuItem";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/order/:id",
        element: <Order />,
    },
    {
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "dashboard/add-menu",
        element: <AddMenu />
    },
    {
        path: "dashboard/list-menu",
        element: <MenuItemsList />
    },
    {
        path: "dashboard/edit-menu-item/:id",
        element: <EditMenuItem />
    },
    {
        path: "/login",
        element: <Login />
    },
]);

export default router;