import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Products from "../../Pages/Products/Products";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayout from "../../layouts/DashboardLayout";
import MyAppointment from "../../Pages/DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../../Pages/DashBoard/AllUsers/AllUsers";
import AdminRoute from "../AdminRoute/AdminRoute";
import Payment from "../../Pages/DashBoard/Payment/Payment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/',
                loader: () => fetch('http://localhost:5000/categories'),
                element: <Home></Home>,
            },
            {
                path: '/categories/:id',
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>,
            },
            
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    },
    {
        path: '*',
        element: <div className="text-center text-secondary m-auto">
            <h1 className="text-5xl">404</h1>
            <h3>OPPS! PAGE NOT BE FOUND</h3>
            </div>
    }
   
]);

export default router;