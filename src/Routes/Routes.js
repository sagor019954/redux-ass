import { createBrowserRouter } from "react-router-dom";
import CartList from "../Components/CartList";
import Form from "../Form/Form";
import Home from '../Home/Home'
import Main from "../Layout/Main";

const router = createBrowserRouter([{
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/cartlist',
            element: <CartList></CartList>
        },
        {
            path: '/order',
            element: <Form></Form>
        },
    ]
}])

export default router;