import React from 'react';
import { Box, Grid, Rating, Typography } from '@mui/material';
import styles from './styles.module.css';
import products from '../../constants/products';
const Productarea = (props) => {
	return (
		<div>
			<Box component="section" className={styles.product_area}>
				<Box className={styles.section_title}>
					<Typography component="h2">Featured Products</Typography>
				</Box>
				<Box className={styles.product_container}>
					<Box className={`${styles.row}`}>
						{products.map(({ name, price, oldPrice, image, sale, rate, items }) => (
							<Grid key={name} className={styles.product_item}>
								<Box className={styles.product_thumb}>
									<Typography component="a" href="#" target="_blank">
										<Box component="img" alt="Logo-product" src={image} />
									</Typography>
									<Box className={styles.label_product}>
										<Typography component="span" className={styles.label_sale}>
											{sale}
										</Typography>
									</Box>
								</Box>
								<Box className={styles.product_content}>
									<Rating name="read-only" value={rate} readOnly />
									<Typography component="h4">{name}</Typography>
									<Box className={styles.price_box}>
										<Typography component="span" className={styles.current_price}>
											{price}
										</Typography>
										<Typography component="span" className={styles.old_price}>
											{oldPrice}
										</Typography>
									</Box>
								</Box>
							</Grid>
						))}
					</Box>
				</Box>
			</Box>
		</div>
	);
};

Productarea.propTypes = {};

export default Productarea;
