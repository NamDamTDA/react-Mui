import React from 'react';
import NewsLetter from '../../../components/NewsLetter';
import ProductArea from '../../../components/ProductArea';
import Banner from '../../../components/Slider';
import StoreTitle from '../../../components/StoreTitle';
import TestimonialArea from '../../../components/TestimonialArea';

const HomePage = (props) => {
	return (
		<div>
			<Banner/>
			<StoreTitle/>
			<ProductArea/>
			<TestimonialArea/>
			<NewsLetter/>
		</div>
	);
};

HomePage.propTypes = {};

export default HomePage;
