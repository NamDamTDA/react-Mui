import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import AdminLayout from './pages/AdminLayout';
import HomePage from './pages/Client/HomePage/HomePage';
import WebsiteLayout from './pages/WebsiteLayout';
const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: 'Rubik',
		},
	},
	
});
const App = () => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<main>
					<Routes>
						<Route path="/" element={<WebsiteLayout />}>
							<Route index element={<HomePage />} />
							<Route path="about" element={<h1>About Page</h1>} />
							<Route path="contact" element={<h1>Contact Page</h1>} />
							<Route path="products">
								<Route index element={<h1>ListProductClient</h1>} />
								<Route path=":id" element={<h1>DetailProduct</h1>} />
							</Route>
							<Route path="login" element={<h1>Login</h1>} />
							<Route path="signup" element={<h1>Signup</h1>} />
						</Route>

						<Route path="admin" element={<AdminLayout />}>
							<Route index element={<Navigate to={'product'} />} />
							<Route path="products">
								<Route index element={<h1>ManagerProducts</h1>} />
								<Route path="add" element={<h1>AddProductPage</h1>} />
								<Route path="edit/:id" element={<h1>EditProduct</h1>} />
							</Route>
							<Route path="categories">
								<Route index element={<h1>ManagerCategory</h1>} />
								<Route path="add" element={<h1>AddProductPage</h1>} />
								<Route path="edit/:id" element={<h1>EditProduct</h1>} />
							</Route>
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</main>
			</ThemeProvider>
		</div>
	);
};

export default App;
