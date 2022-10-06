import {
	Box,
	Button,
	Container,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import Face3Icon from '@mui/icons-material/Face3';
import React from 'react';
import { FavoriteBorder, LocalMallOutlined, SearchOutlined } from '@mui/icons-material';
import styles from './styles.module.css';

const pages = ['Products', 'About', 'Blog', 'Contact'];
const icons = [
	{ title: 'Search', icon: <SearchOutlined fontSize="large" /> },
	{ title: 'Open settings', icon: <Face3Icon fontSize="large" /> },
	{ title: 'Favorite', icon: <FavoriteBorder fontSize="large" /> },
	{ title: 'Cart', icon: <LocalMallOutlined fontSize="large" /> },
];
const Header = () => {
	return (
		<div>
			<Box component="header" className={styles.header_transparent} classes={styles.sticky_header}>
				<Container className={styles.container}>
					<Toolbar disableGutters className={styles.row}>
						<Box className={styles.main_menu}>
							{pages.map((page) => (
								<Button key={page} className={styles.menu_item} color='success'>
									{page}
								</Button>
							))}
						</Box>
						<Box
							className={styles.logo}
							component="img"
							alt="Logo"
							src="https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png"
						/>
						<Box className={styles.header_right}>
							{icons.map(({ title, icon, items }) => (
								<Tooltip title={title} key={title} className={styles.header_account_list}>
									<Typography component="a" href="#" target="_blank">
										{icon}
									</Typography>
								</Tooltip>
							))}
						</Box>
					</Toolbar>
				</Container>
			</Box>
		</div>
	);
};

export default Header;
