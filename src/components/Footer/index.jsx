import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import styles from './styles.module.css';
import content from '../../constants/footer';

const Footer = () => {
	const { brand, socials, menus, copyright } = content;
	return (
		<Box component="footer" className={styles.footer_widgets}>
			<Box className={styles.footer_top}>
				<Container maxWidth="xl" className="container">
					<Grid container className="row">
						<Grid item className={styles.widgets_container}>
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
									{socials.map(({ icon, link }, index) => (
										<Box component="li" key={index}>
											<Typography component="a" href={link} variant="h5">
												{icon}
											</Typography>
										</Box>
									))}
								</Box>
							</Box>
						</Grid>
						{menus.map(({ name: title, items }, index) => (
							<Grid key={index} item xs={6} md={2} className={styles.widget_menu}>
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
