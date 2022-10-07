import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import brands from '../../constants/brands';

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
