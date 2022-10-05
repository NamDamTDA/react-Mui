import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Tooltip,
	Typography,
} from '@mui/material';
import React from 'react';
const pages = ['Products', 'About', 'Blog', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const Header = () => {
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<div>
			<AppBar position="static" color="primary" sx={{ background: 'rgba(0,0,0,0)' }}>
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
							{pages.map((page) => (
								<Button
									key={page}
									// onClick={}
									sx={{ my: 2, color: 'black', display: 'block' }}
								>
									{page}
								</Button>
							))}
						</Box>
						<Box
							component="img"
							sx={{
								maxWidth: { xs: 99, md: 150 },
								'&:hover': {
									opacity: [0.9, 0.8, 0.7],
								},
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								marginLeft: '200px',
							}}
							alt="Logo"
							src="https://htmldemo.net/lukani/lukani/assets/img/logo/logo.png"
						/>
						<Box sx={{ flexGrow: 1, textAlign: 'right' }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt="R" src="https://picsum.photos/seed/picsum/20/30" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting} onClick={handleCloseUserMenu}>
										<Typography textAlign="center">{setting}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Header;
