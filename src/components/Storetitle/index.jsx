import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.css';
import Shippingarea from '../Shippingarea';

const Storetitle = (props) => {
	return (
		<div>
			<Box component="section" className={styles.lstore_title}>
				<Box className={styles.section_title}>
					<Typography component="h2">Lukani Store</Typography>
					<Typography component="p">
						Commodo sociosqu venenatis cras dolor sagittis integer luctus sem primis
						eget maecenas sedurna malesuada consectetuer.
					</Typography>
				</Box>
			</Box>
            <Shippingarea/>
		</div>
	);
};

Storetitle.propTypes = {};

export default Storetitle;
