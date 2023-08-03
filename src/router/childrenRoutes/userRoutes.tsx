import About from '../../views/User/About';
import Cart from '../../views/User/Cart';
import Chat from '../../views/User/Chat';
import ContactForm from '../../views/User/ContactForm';
import CreateProduct from '../../views/User/CreateProduct';
import Detail from '../../views/User/Detail';
import EditProfile from '../../views/User/EditProfile';
import Faqs from '../../views/User/Faqs';
import Home from '../../views/User/Home';
import Landing from '../../views/User/Landing';
import Orders from '../../views/User/Orders';
import Pago from '../../views/User/Pago';
import Pedido from '../../views/User/Pedido';
import Profile from '../../views/User/Profile';
import RecuPass from '../../views/User/RecuPass';
import Review from '../../views/User/Review';


export const userRoutes = [
    {
        path: 'about',
        element: <About />
    },
    {
        path: 'cart',
        element: <Cart />
    },
    {
        path: 'chat',
        element: <Chat />
    },
    {
        path: 'contact',
        element: <ContactForm />
    },
    {
        path: 'createproduct',
        element: <CreateProduct />
    },
    {
        path: 'detail',
        element: <Detail />
    },
    {
        path: 'editprofile',
        element: <EditProfile />
    },
    {
        path: 'faqs',
        element: <Faqs />
    },
    {
        path: 'home',
        element: <Home />
    },
    {
        path: 'landing',
        element: <Landing />
    },
    {
        path: 'orders',
        element: <Orders />
    },
    {
        path: 'pago',
        element: <Pago />
    },
    {
        path: 'pedido',
        element: <Pedido />
    },
    {
        path: 'profile',
        element: <Profile />
    },
    {
        path: 'recupass',
        element: <RecuPass />
    },
    {
        path: 'review',
        element: <Review />
    },
]