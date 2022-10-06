import { FacebookOutlined, GitHub, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';
const content = {
	brand: {
		name: 'LUCANI COMPANY',
		description: 'The next generation of design systems.',
		image: 'https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png',
	},
	socials: [
		{
			icon: <FacebookOutlined />,
			link: '#',
		},
		{
			icon: <Twitter />,
			link: '#',
		},
		{
			icon: <Instagram />,
			link: '#',
		},
		{
			icon: <Pinterest />,
			link: '#',
		},
		{
			icon: <GitHub />,
			link: '#',
		},
	],
	menus: [
		{
			name: 'OPENING TIME',
			items: [
				{ name: 'Mon - Fri: 8AM - 10PM', href: '#' },
				{ name: 'Sat: 9AM-8PM', href: '#' },
				{ name: 'Suns: 14hPM-18hPM', href: '#' },
				{ name: 'We Work All The Holidays', href: '#' },
			],
		},
		{
			name: 'INFORMATION',
			items: [
				{ name: 'About Us', href: '#' },
				{ name: 'Checkout', href: '#' },
				{ name: 'Contact', href: '#' },
				{ name: 'Frequently Questions', href: '#' },
				{ name: 'Wishlist', href: '#' },
			],
		},
		{
			name: 'MY ACCOUNT',
			items: [
				{ name: 'My Account', href: '#' },
				{ name: 'Contact', href: '#' },
				{ name: 'Shopping cart', href: '#' },
				{ name: 'Checkout', href: '#' },
				{ name: 'Shop', href: '#' },
				{ name: 'Order History', href: '#' },
			],
		},
		{
			name: 'CUSTOMER SERVICE',
			items: [
				{ name: 'Contact Us', href: '#' },
				{ name: 'Terms of use', href: '#' },
				{ name: 'Privacy Policy', href: '#' },
				{ name: 'Site Map', href: '#' },
				{ name: 'My Account', href: '#' },
				{ name: 'Returns', href: '#' },
			],
		},
	],
	copyright: (
		<Typography variant="button">
			Copyright &copy; 2022 Material Design by{' '}
			<Typography component="a" href="#" target="_blank" rel="noreferrer" variant="button">
				DamNam
			</Typography>
			.
		</Typography>
	),
};

const Footer = () => {
	const { brand, socials, menus, copyright } = content;
	return (
		<Box component="footer" className={styles.footer_widgets}>
			<Box className={styles.footer_top}>
				<Container maxWidth="xl" className="container">
					<Grid container className="row">
						<Grid item className={styles.widgets_container} classes={styles.widget_app}>
							<Box>
								<Link to={brand.route}>
									<Box
										component="img"
										src={brand.image}
										alt={brand.name}
										className={styles.footer_logo}
									/>
								</Link>
								<Typography variant="h5">{brand.name}</Typography>
							</Box>
							<Box className={styles.footer_social}>
								<Box component="ul">
									{socials.map(({ icon, link }, key) => (
										<Box component="li" key={link}>
											<Typography component="a" href={link} variant="h5">
												{icon}
											</Typography>
										</Box>
									))}
								</Box>
							</Box>
						</Grid>
						{menus.map(({ name: title, items }) => (
							<Grid
								key={title}
								item
								xs={6}
								md={2}
								classes={styles.widgets_container}
								className={styles.widget_menu}
							>
								<Typography className={styles.widgets_title} variant="h3">
									{title}
								</Typography>
								<Box className={styles.footer_menu}>
									<Box component="ul">
										{items.map(({ name, route, href }) => (
											<Box key={name} component="li">
												{href ? (
													<Typography component="a" href={href} variant="button">
														{name}
													</Typography>
												) : (
													<Typography component={Link} to={route} variant="button">
														{name}
													</Typography>
												)}
											</Box>
										))}
									</Box>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			<Box className={styles.footer_bottom}>
				<Grid item>{copyright}</Grid>
			</Box>
		</Box>
	);
};

export default Footer;
