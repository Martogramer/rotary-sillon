import { createBrowserRouter } from 'react-router-dom';
import { LayoutUser } from '../layouts/LayoutUser';
import { userRoutes } from './childrenRoutes/userRoutes';
import { LayoutAdmin } from '../layouts/LayoutAdmin';
import { adminRoutes } from './childrenRoutes/adminRoutes';

export const router = createBrowserRouter([
	{
		path: '/',
		element: (
				<LayoutUser />
		),
		children: userRoutes
	},
	{
		path: '/admin',
		element: (
				<LayoutAdmin />
		),
		children: adminRoutes
	},
])
