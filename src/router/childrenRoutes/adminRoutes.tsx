import AddCategory from '../../views/Admin/AddCategory';
import Create from '../../views/Admin/Create';
import Customers from '../../views/Admin/Customers';
import Edit from '../../views/Admin/Edit';
import OrderDetail from '../../views/Admin/OrderDetail';
import Orders from '../../views/Admin/Orders';
import ProductDetail from '../../views/Admin/ProductDetail';
import UserDetail from '../../views/Admin/UserDetail';


export const adminRoutes = [
    {
        path: '',
        element: <AddCategory />
    },
    {
        path: 'create',
        element: <Create />
    },
    {
        path: 'customers',
        element: <Customers />
    },
    {
        path: 'edit',
        element: <Edit />
    },
    {
        path: 'orderDetail',
        element: <OrderDetail />
    },
    {
        path: 'orders',
        element: <Orders />
    },
    {
        path: 'productDetail',
        element: <ProductDetail />
    },
    {
        path: '',
        element: <UserDetail />
    },
]