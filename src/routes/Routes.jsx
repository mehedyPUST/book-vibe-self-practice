import { createBrowserRouter } from "react-router"
import MainLayout from "../Layout/MainLayout"
import HomePage from "../pages/Homepage/HomePage"
import Books from "../pages/books/Books"
import ErrorMsg from "../components/errorElement/ErrorMsg"

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [{
        index: true,
        element: <HomePage></HomePage>
    },
    {
        path: "/books",
        element: <Books> </Books>
    },
    {
        path: "/listed-books",
        element: 'Listed-books'
    },
    {
        path: "/pages-to-read",
        element: "pages-to-read"
    },
    ],
    errorElement: <ErrorMsg></ErrorMsg>
},
{
    path: "/books",
    element: 'books'
}])
