import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styles from './styles.module.css';

const Description = () => {
	return (
		<div>
			<Box className={styles.product_bottom}>
				<Box className={styles.description}>
					<Typography component="h4">Description</Typography>
					<Box className={styles.desc_content}>
						<Typography component="p">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
							augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
							Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate
							adipiscing cursus eu, suscipit id nulla.
						</Typography>
						<Typography component="p">
							Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
							quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
							ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
							sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
							placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
							mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
							gravida vehicula tellus, in imperdiet ligula euismod eget.
						</Typography>
					</Box>
				</Box>
				<Box className={styles.reviews}>
					<Typography component="h4">Reviews</Typography>
					<Box className={styles.reviews_wrapper}>
						<Typography component="h2">Reviewed</Typography>
						<Paper className={styles.reviews_container}>
							<Grid container wrap="nowrap" spacing={2}>
								<Grid item>
									<Avatar
										alt="user"
										src="https://htmldemo.net/lukani/lukani/assets/img/about/testimonial1.png"
									/>
								</Grid>
								<Grid justifyContent="left" item xs zeroMinWidth>
									<h5 className={styles.reviews_user}>Michel Michel</h5>
									<p className={styles.reviews_main}>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus
										ut est sed faucibus. Duis bibendum ac ex vehicula laoreet. Suspendisse
										congue vulputate lobortis.
									</p>
									<p className={styles.reviews_times}>posted 1 minute ago</p>
								</Grid>
							</Grid>
						</Paper>
						<Typography component="h2">Add a Review</Typography>
						<Box>Blank</Box>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Description;
