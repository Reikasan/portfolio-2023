import React from 'react';
import { useState } from 'react';
import { AppBar, Box, Container, IconButton, Menu, MenuItem, Slide, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as Scroll } from 'react-scroll';
import ShowOnScroll from './show-on-scroll-nav';

const sections = ['projects', 'about', 'contact'];

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ShowOnScroll>
      <AppBar position="fixed" id="navigation">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Scroll
              className='logo'
              to="hero-section"
            >
              Reika Akuzawa
            </Scroll>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'end'}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menuAppBar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menuAppBar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {sections.map((section) => (
                  <MenuItem key={section} onClick={handleCloseNavMenu}>
                    <Scroll 
                      className='nav-link mobile'
                      to={`${section}`}
                      offset={-64}
                      smooth
                      spy
                    >
                      {section}
                    </Scroll>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box 
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end'}} 
              // onClick={handleCloseNavMenu}
            >
              {sections.map((section) => (
                <Scroll
                  to={`${section}`}
                  offset={-64}
                  key={section}
                  // onClick={handleCloseNavMenu}
                  smooth
                  spy
                  className='nav-link'
                >
                  {section}
                </Scroll>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ShowOnScroll>
  );
}

export default Navigation;