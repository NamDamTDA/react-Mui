import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';

const slider = [
	{
		title: `Free Delivery`,
		desc: 'Free shipping around the world for all ',
		desc2: ' orders over $120',
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/about/shipping1.png',
	},
	{
		title: `Safe Payment`,
		desc: `With our payment gateway, don't worry `,
		desc2: ' about your information',
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/about/shipping2.png',
	},
	{
		title: `Friendly Services`,
		desc: 'You have 30-day return guarantee for ',
		desc2: ' every single order',
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/about/shipping3.png',
	},
];

const Shippingarea = (props) => {
	return (
		<div>
			<Box component="section" className={styles.shipping_area}>
				<Box className={styles.row}>
					{slider.map(({ title, desc, desc2, icon, items }) => (
						<Grid key={title} className={styles.single_shipping}>
							<Box
								className={styles.shipping_icone}
								component="img"
								alt="Logo-ship"
								src={icon}
							/>
							<Box className={styles.shipping_content}>
								<Typography component="h3">{title}</Typography>
								<Typography component="p">{desc}</Typography>
								<Typography component="p">{desc2}</Typography>
							</Box>
						</Grid>
					))}
				</Box>
			</Box>
		</div>
	);
};

Shippingarea.propTypes = {};

export default Shippingarea;
