import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { MailOutlineOutlined } from '@mui/icons-material';
import styles from './styles.module.css';

const Newsletter = (props) => {
	return (
		<div>
			<Box component="section" className={styles.newsletter_area}>
				<Box className={styles.section_title}>
					<Typography component="h2">
						Get
						<Typography component="span"> 20% Off </Typography>
						Your Next Order
					</Typography>
				</Box>
				<Box className={styles.newsletter_container}>
					<Box className={styles.subscribe_form}>
						<MailOutlineOutlined className={styles.email_icon} fontSize="large" />
						<Box
							component="input"
							id="form_input"
							placeholder="Enter you email"
							type="email"
						/>
						<Button>Subscribe</Button>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

Newsletter.propTypes = {};

export default Newsletter;
