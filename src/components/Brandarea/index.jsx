import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';

const brands = [
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand1.png',
	},
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand2.png',
	},
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand3.png',
	},
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand4.png',
	},
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand5.png',
	},
	{
		link: `#`,
		icon: 'https://htmldemo.net/lukani/lukani/assets/img/brand/brand6.png',
	},
];

const Brandarea = (props) => {
	return (
		<div>
			<Box component="section" className={styles.brand_area}>
				<Box className={styles.row}>
					{brands.map(({ link, icon, items }) => (
						<Grid key={items} className={styles.single_brand}>
							<Typography component="a" href={link} target="_blank">
								<Box
									className={styles.icone}
									component="img"
									alt="Logo-brand"
									src={icon}
								/>
							</Typography>
						</Grid>
					))}
				</Box>
			</Box>
		</div>
	);
};

Brandarea.propTypes = {};

export default Brandarea;
