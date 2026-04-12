import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/HomePage/Homepage";
import Books from "../pages/books/Books";
import ErrorMsg from "./errorElement/ErrorMsg";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{
            index: true,
            element: <Homepage></Homepage>
        },
        {
            path: "/books",
            element: <Books></Books>
        }],
        errorElement: <ErrorMsg></ErrorMsg>
    }

])