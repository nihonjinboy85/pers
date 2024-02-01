import { useAuth0 } from '@auth0/auth0-react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  SvgIcon,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { isAuthenticated } = useAuth0();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <>
      <AppBar position='sticky'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <SvgIcon version="1.0" xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 336 336" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}><path d="M146.4 14c-5.8 2.3-8.3 11.4-4.9 17.9 1.3 2.6 9.3 7.1 12.5 7.1 4.3 0 12.5 6.8 14.1 11.8a71.2 71.2 0 0 1 3.3 16.1c-.2.3-25 .5-55.2.5l-54.7.1-6.1 3.2C44.2 76.6 40.6 83.2 39 101c-1.2 13.2-1.9 16-4.4 17l-7.7 3.1c-4.4 1.7-6.2 3-7.7 5.8-3.9 6.8-18.2 49-18.2 53.5 0 1.2 1.4 3.8 3 5.8 5 6 13.1 6.3 19.5.7 2.4-2.1 3.4-2.5 3.8-1.6.5 1.4-1.5 35.5-3.4 56.7-1.2 14-.5 28.3 1.7 34.9a48.6 48.6 0 0 0 27.1 29.4l6.8 3.2H176c110.9 0 116.8-.1 121.8-1.9a75.6 75.6 0 0 0 20.2-12.5c0-.4 1.1-2.1 2.5-3.7s2.5-3.7 2.5-4.6c0-.9.6-2.1 1.3-2.5.6-.4 2.3-3.1 3.7-5.8 2.2-4.4 2.5-6.6 2.9-17.5.4-13.7-1.6-41-3-41-.5 0-.9-3.9-.9-8.8-.1-11.5-1.5-23.5-2.9-24-.7-.2-1.1-3.5-1.1-8.5 0-11.8-1.9-31.1-3-31.5-.6-.2-1-4.8-1-10.5 0-11-1.7-28.9-3.1-32.2-.4-1.1-.9-6-1.1-10.8-.2-7.1-.7-9.1-2-10.1-1-.7-1.8-2-1.8-2.8 0-2.3-5.7-7.5-11.4-10.3l-5-2.5h-54c-29.8 0-55.1-.3-56.3-.6-1.8-.5-2.1-1.1-1.6-4.2a22 22 0 0 1 1.3-5.7l1.9-6c2-7.1 7.2-11.2 16.5-12.9A14.8 14.8 0 0 0 215 24.3c0-3.6-.6-4.9-3.5-7.8-2.9-3-4.1-3.5-7.9-3.5a20 20 0 0 0-6.8 1.1c-2.7 1.2-6.8 6.8-6.8 9.3 0 3-1.8 5.3-6.4 8-5.5 3.2-6.4 3.2-12.6.1-4.3-2.2-5-2.9-5-5.5 0-1.8-.6-3.3-1.5-3.6-.8-.4-1.5-1.7-1.5-3 0-4.8-10.1-8.1-16.6-5.4zM260 90.5c0 .3-1.8 1.2-4 2.1-3.1 1.2-4.7 2.9-7.2 7.2-6 10.6-3.4 21.3 7.4 30.3 8.6 7.1 9.6 7.7 16.3 8.7 8.1 1.3 12.3-.4 18-7.4 7.8-9.7 7.9-20.5.2-30.6a33.6 33.6 0 0 0-11.3-9.5c-1.6-1 0-1.2 8.2-1.2 9.7-.1 10.1 0 12.6 2.6 4.4 4.6 6.4 16.5 11.9 69.3 3.2 31.2 2.2 41-6.1 58.6-8.5 17.8-30.3 34.6-55 42.3-19.2 6.1-21.1 6.3-74.2 6.8-52.4.5-60 .1-73.3-4.2A88.5 88.5 0 0 1 51.8 223a83.5 83.5 0 0 1-9.1-35c.2-9.3 2.7-30.1 5.3-44 1.1-5.8 2.9-17.3 4-25.5 3.3-24.6 4.2-26.9 10.5-27.8 4.3-.6 197.5-.8 197.5-.2z"/><path d="M84 96.3c-7.9 2.6-16.1 10.4-18 17.1a24.6 24.6 0 0 0 3.4 20.4c6.7 11.4 13.9 13.8 27 9.1 5.8-2 7.6-3.3 12.1-8.4 5.5-6.4 7.5-10.6 7.5-16.3 0-6.7-2.1-11.1-7.8-16.2A23.6 23.6 0 0 0 84 96.3zM151 130a59.5 59.5 0 0 0-39.4 30.2c-6.5 12.6-4.6 21 6.1 27 6.8 3.8 17 4.8 26 2.5a45.1 45.1 0 0 0 23.2-17.1 58.7 58.7 0 0 0 4.9-25.7c-.3-6.5-.7-8.1-3.2-11.3-2.9-3.8-8-6.7-11.3-6.5l-6.3.9zm1.5 22.3c3.3 1.9 4.1 2.8 4.3 5.8.2 2.3-.4 4.6-2 6.9-4.5 6.6-11.5 7.9-16.7 3.1-2.6-2.4-3.1-3.7-3.1-7.3 0-3.5.6-4.9 2.8-7 4.7-4.5 8.7-4.9 14.7-1.5zM209 129.7c-5.1 1.9-9 8.9-9 16.2 0 7.1 2.7 19.6 5.4 24.9a38.3 38.3 0 0 0 15.7 14.4c3.7 2 5.9 2.3 14.4 2.3 8.9 0 10.6-.3 15.7-2.8 7.8-3.8 11.8-8.5 11.8-14 0-6-1.5-10.4-5.5-16.7a55 55 0 0 0-22.8-20.5c-8.3-4.2-9.4-4.5-16.6-4.4a49 49 0 0 0-9.1.6zm25.6 22.7c4.6 4.6 4.7 9.6.3 13.7-4.9 4.6-12 3.4-16.8-2.7-3.2-4-2.7-7.7 1.4-11.3 5.1-4.5 10.4-4.4 15.1.3zM175 178c-8.4 1.3-10.4 6.3-5.5 14.5 2.7 4.7 5.2 6.6 10.8 8.4l3.8 1.3-.3 9.6-.3 9.7-6-.2a41 41 0 0 1-10.5-1.8c-6.6-2.5-9.4-2.5-9.8.1-.7 4.6 11.1 10.5 23.6 11.9 10.9 1.3 29-4.2 32.7-9.9 3.3-4.9-.2-5.8-10.6-2.7a155 155 0 0 1-10.2 2.6l-3.8.6.3-10.2.3-10.1 5.3-2c3.5-1.3 6.3-3.2 8.4-5.9 1.7-2.1 3.7-3.9 4.5-3.9 1.8 0 1.7-1.6-.2-2.4-.8-.3-1.5-1.5-1.5-2.6 0-3.6-1.9-5.9-5.8-7-4.2-1.1-17-1.1-25.2 0z"/></SvgIcon>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='#'
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Pers (beta)
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size='large'
                aria-label='menu'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' }
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' component='a' href='/accounts'>Accounts</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <SvgIcon version="1.0" xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 336 336" sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}><path d="M146.4 14c-5.8 2.3-8.3 11.4-4.9 17.9 1.3 2.6 9.3 7.1 12.5 7.1 4.3 0 12.5 6.8 14.1 11.8a71.2 71.2 0 0 1 3.3 16.1c-.2.3-25 .5-55.2.5l-54.7.1-6.1 3.2C44.2 76.6 40.6 83.2 39 101c-1.2 13.2-1.9 16-4.4 17l-7.7 3.1c-4.4 1.7-6.2 3-7.7 5.8-3.9 6.8-18.2 49-18.2 53.5 0 1.2 1.4 3.8 3 5.8 5 6 13.1 6.3 19.5.7 2.4-2.1 3.4-2.5 3.8-1.6.5 1.4-1.5 35.5-3.4 56.7-1.2 14-.5 28.3 1.7 34.9a48.6 48.6 0 0 0 27.1 29.4l6.8 3.2H176c110.9 0 116.8-.1 121.8-1.9a75.6 75.6 0 0 0 20.2-12.5c0-.4 1.1-2.1 2.5-3.7s2.5-3.7 2.5-4.6c0-.9.6-2.1 1.3-2.5.6-.4 2.3-3.1 3.7-5.8 2.2-4.4 2.5-6.6 2.9-17.5.4-13.7-1.6-41-3-41-.5 0-.9-3.9-.9-8.8-.1-11.5-1.5-23.5-2.9-24-.7-.2-1.1-3.5-1.1-8.5 0-11.8-1.9-31.1-3-31.5-.6-.2-1-4.8-1-10.5 0-11-1.7-28.9-3.1-32.2-.4-1.1-.9-6-1.1-10.8-.2-7.1-.7-9.1-2-10.1-1-.7-1.8-2-1.8-2.8 0-2.3-5.7-7.5-11.4-10.3l-5-2.5h-54c-29.8 0-55.1-.3-56.3-.6-1.8-.5-2.1-1.1-1.6-4.2a22 22 0 0 1 1.3-5.7l1.9-6c2-7.1 7.2-11.2 16.5-12.9A14.8 14.8 0 0 0 215 24.3c0-3.6-.6-4.9-3.5-7.8-2.9-3-4.1-3.5-7.9-3.5a20 20 0 0 0-6.8 1.1c-2.7 1.2-6.8 6.8-6.8 9.3 0 3-1.8 5.3-6.4 8-5.5 3.2-6.4 3.2-12.6.1-4.3-2.2-5-2.9-5-5.5 0-1.8-.6-3.3-1.5-3.6-.8-.4-1.5-1.7-1.5-3 0-4.8-10.1-8.1-16.6-5.4zM260 90.5c0 .3-1.8 1.2-4 2.1-3.1 1.2-4.7 2.9-7.2 7.2-6 10.6-3.4 21.3 7.4 30.3 8.6 7.1 9.6 7.7 16.3 8.7 8.1 1.3 12.3-.4 18-7.4 7.8-9.7 7.9-20.5.2-30.6a33.6 33.6 0 0 0-11.3-9.5c-1.6-1 0-1.2 8.2-1.2 9.7-.1 10.1 0 12.6 2.6 4.4 4.6 6.4 16.5 11.9 69.3 3.2 31.2 2.2 41-6.1 58.6-8.5 17.8-30.3 34.6-55 42.3-19.2 6.1-21.1 6.3-74.2 6.8-52.4.5-60 .1-73.3-4.2A88.5 88.5 0 0 1 51.8 223a83.5 83.5 0 0 1-9.1-35c.2-9.3 2.7-30.1 5.3-44 1.1-5.8 2.9-17.3 4-25.5 3.3-24.6 4.2-26.9 10.5-27.8 4.3-.6 197.5-.8 197.5-.2z"/><path d="M84 96.3c-7.9 2.6-16.1 10.4-18 17.1a24.6 24.6 0 0 0 3.4 20.4c6.7 11.4 13.9 13.8 27 9.1 5.8-2 7.6-3.3 12.1-8.4 5.5-6.4 7.5-10.6 7.5-16.3 0-6.7-2.1-11.1-7.8-16.2A23.6 23.6 0 0 0 84 96.3zM151 130a59.5 59.5 0 0 0-39.4 30.2c-6.5 12.6-4.6 21 6.1 27 6.8 3.8 17 4.8 26 2.5a45.1 45.1 0 0 0 23.2-17.1 58.7 58.7 0 0 0 4.9-25.7c-.3-6.5-.7-8.1-3.2-11.3-2.9-3.8-8-6.7-11.3-6.5l-6.3.9zm1.5 22.3c3.3 1.9 4.1 2.8 4.3 5.8.2 2.3-.4 4.6-2 6.9-4.5 6.6-11.5 7.9-16.7 3.1-2.6-2.4-3.1-3.7-3.1-7.3 0-3.5.6-4.9 2.8-7 4.7-4.5 8.7-4.9 14.7-1.5zM209 129.7c-5.1 1.9-9 8.9-9 16.2 0 7.1 2.7 19.6 5.4 24.9a38.3 38.3 0 0 0 15.7 14.4c3.7 2 5.9 2.3 14.4 2.3 8.9 0 10.6-.3 15.7-2.8 7.8-3.8 11.8-8.5 11.8-14 0-6-1.5-10.4-5.5-16.7a55 55 0 0 0-22.8-20.5c-8.3-4.2-9.4-4.5-16.6-4.4a49 49 0 0 0-9.1.6zm25.6 22.7c4.6 4.6 4.7 9.6.3 13.7-4.9 4.6-12 3.4-16.8-2.7-3.2-4-2.7-7.7 1.4-11.3 5.1-4.5 10.4-4.4 15.1.3zM175 178c-8.4 1.3-10.4 6.3-5.5 14.5 2.7 4.7 5.2 6.6 10.8 8.4l3.8 1.3-.3 9.6-.3 9.7-6-.2a41 41 0 0 1-10.5-1.8c-6.6-2.5-9.4-2.5-9.8.1-.7 4.6 11.1 10.5 23.6 11.9 10.9 1.3 29-4.2 32.7-9.9 3.3-4.9-.2-5.8-10.6-2.7a155 155 0 0 1-10.2 2.6l-3.8.6.3-10.2.3-10.1 5.3-2c3.5-1.3 6.3-3.2 8.4-5.9 1.7-2.1 3.7-3.9 4.5-3.9 1.8 0 1.7-1.6-.2-2.4-.8-.3-1.5-1.5-1.5-2.6 0-3.6-1.9-5.9-5.8-7-4.2-1.1-17-1.1-25.2 0z"/></SvgIcon>
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                color: 'inherit',
                textDecoration: 'none'
              }}
            >
              Pers (beta)
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                component='a'
                href='/accounts'
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Accounts
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                {isAuthenticated ? (
                    <LogoutButton />
                ) : (
                  <LoginButton />
                )}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

    </>
  );
}

export default Header;
