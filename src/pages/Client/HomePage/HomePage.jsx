import React from 'react';
import Newsletter from '../../../components/Newsletter';
import Productarea from '../../../components/Productarea';
import Banner from '../../../components/Slider';
import Storetitle from '../../../components/Storetitle';
import Testimonialarea from '../../../components/Testimonialarea';

const HomePage = (props) => {
	return (
		<div>
			<Banner/>
			<Storetitle/>
			<Productarea/>
			<Testimonialarea/>
			<Newsletter/>
		</div>
	);
};

HomePage.propTypes = {};

export default HomePage;
