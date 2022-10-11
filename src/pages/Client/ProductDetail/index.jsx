import {
	Add,
	FacebookOutlined,
	InsertLink,
	Loyalty,
	Pinterest,
	Public,
	Remove,
	Twitter,
} from '@mui/icons-material';
import {
	Box,
	Button,
	Grid,
	IconButton,
	Rating,
	Stack,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	Typography,
} from '@mui/material';
import React from 'react';
import BrandArea from '../../../components/BrandArea';
import Description from '../../../components/Description';
import RelatedProduct from '../../../components/RelatedProduct';
import styles from './styles.module.css';

const ProductDetail = () => {
	const { name, image, rate, desc, price, oldPrice } = product;
	return (
		<div>
			<Box component="section" className={styles.product_detail_area}>
				<Box className={styles.section_title}>
					<Typography component="h4">Detail Product Page</Typography>
				</Box>
				<Box className={styles.product_main}>
					<Box className={styles.product_item}>
						<Box className={styles.product_images}>
							<Box className={styles.product_thumb}>
								<Typography component="a" href="#" target="_blank">
									<Box
										className={styles.main_image}
										component="img"
										alt="Logo-product"
										src={image}
									/>
								</Typography>
							</Box>
							<Box className={styles.gallery_img}>
								{imgs.map(({ image, index }) => (
									<Grid key={index} className={styles.gallery_item}>
										<Typography component="a" href="#" target="_blank">
											<Box component="img" alt="Logo-product" src={image} />
										</Typography>
									</Grid>
								))}
							</Box>
						</Box>
						<Box className={styles.product_content}>
							<Box className={styles.content_header}>
								<Typography component="h1">{name}</Typography>
								<Rating name="read-only" value={rate} readOnly />
								<Box className={styles.price_box}>
									<Typography component="span" className={styles.current_price}>
										{price}
									</Typography>
									<Typography component="span" className={styles.old_price}>
										{oldPrice}
									</Typography>
								</Box>
								<Typography component="span" className={styles.product_desc}>
									{desc}
								</Typography>
							</Box>
							<Box className={styles.content_button}>
								<Box className={styles.product_variant}>
									<Box className={styles.product_option}>
										<Typography component="h3">Available Options</Typography>
										<ToggleButtonGroup exclusive aria-label="text alignment">
											<ToggleButton value="red" className={styles.red}></ToggleButton>
											<ToggleButton value="blue" className={styles.blue}></ToggleButton>
											<ToggleButton value="green" className={styles.green}></ToggleButton>
											<ToggleButton
												value="yellow"
												className={styles.yellow}
											></ToggleButton>
										</ToggleButtonGroup>
									</Box>
									<Box className={styles.subscribe_form}>
										<IconButton aria-label="remove quantity">
											<Remove />
										</IconButton>
										<TextField
											id="form_input"
											min={1}
											max={100}
											value={1}
											label="Quantity"
										/>
										<IconButton aria-label="add quantity">
											<Add />
										</IconButton>
										<Tooltip title="Add to favorite" className={styles.add_favor}>
											<Typography component="a" href="#" target="_blank">
												<Loyalty fontSize="large" />
											</Typography>
										</Tooltip>
										<Button variant="contained" className={styles.add_cart}>
											Add to cart
										</Button>
									</Box>
								</Box>
							</Box>
							<Box className={styles.content_footer}>
								<Stack direction="row" spacing={2}>
									<Button
										variant="contained"
										className={styles.facebook}
										startIcon={<FacebookOutlined fontSize="small" />}
									>
										Like
									</Button>
									<Button
										variant="contained"
										className={styles.twitter}
										startIcon={<Twitter />}
									>
										Tweet
									</Button>
									<Button
										variant="contained"
										className={styles.pinterest}
										startIcon={<Pinterest />}
									>
										Save
									</Button>
									<Button
										variant="contained"
										className={styles.public}
										startIcon={<Public />}
									>
										Share
									</Button>
									<Button
										variant="contained"
										className={styles.linkedin}
										startIcon={<InsertLink />}
									>
										Linked
									</Button>
								</Stack>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
			<Description />
			<RelatedProduct />
			<BrandArea />
		</div>
	);
};

const product = {
	name: `massa porror`,
	price: '$68.00',
	oldPrice: '$92.00',
	image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product3.jpg',
	sale: '-77%',
	rate: 4,
	desc:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum impedit assumenda rerum officiis sit illo facere, consectetur facilis aliquid iste beatae, accusamus debitis? Illum officiis quae impedit quam, odit eos!',
};

const imgs = [
	{
		index: 0,
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product1.jpg',
	},
	{
		index: 1,
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product2.jpg',
	},
	{
		index: 2,
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product5.jpg',
	},
	{
		index: 3,
		image: 'https://htmldemo.net/lukani/lukani/assets/img/product/product4.jpg',
	},
];

export default ProductDetail;
