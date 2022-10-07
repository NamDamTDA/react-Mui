import React from 'react';
import {
	ArrowBackIosNewOutlined,
	ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import slider from '../../constants/slider';

const Banner = (props) => {
	return (
		<div>
			<Box component="section" className={styles.slider_section}>
				<Box className={styles.owl_stage_outer}>
					{slider.map(({ title, title2, content, desc, button, items }) => (
						<Grid key={title} className={styles.owl_item}>
							<Box className={styles.single_slider}>
								<Box className={styles.slider_content}>
									<Typography variant="span">{content}</Typography>
									<Typography variant="h1">{title}</Typography>
									<Typography variant="h1">{title2}</Typography>
									<Typography variant="p" className={styles.desc}>
										{desc}
									</Typography>
									<br></br>
									{button}
								</Box>
							</Box>
						</Grid>
					))}
				</Box>
				<Box className={styles.owl_nav}>
					<Box className={styles.owl_prev}>
						<ArrowBackIosNewOutlined fontSize="large" />
					</Box>
					<Box className={styles.owl_next}>
						<ArrowForwardIosOutlined fontSize="large" />
					</Box>
				</Box>
				<Box className={styles.owl_dots}>
					{slider.map(({ name: title, items }) => (
						<Grid key={title} className={styles.owl_dot}>
							<Typography className="" variant="span">
								.
							</Typography>
						</Grid>
					))}
				</Box>
			</Box>
		</div>
	);
};

Banner.propTypes = {};

export default Banner;
