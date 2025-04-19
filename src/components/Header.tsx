import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  Box,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Menu, X, Phone, Facebook, Instagram, Home as IconHome, Info, Mail, Map, CircleUser } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../public/images/logos4.jpg'; // Adjust path based on your setup

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const text = 'Booking your Cottage';
  const location = useLocation();
  console.log(location)
  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.09, duration: 0.3 },
    }),
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Home', icon: <IconHome size={16} />, path: '/' },
    { label: 'Cottages', icon: <Map size={16} />, path: '/cottages' },
    { label: 'Explore', icon: <Info size={16} />, path: '/explore' },
    { label: 'Contact', icon: <Mail size={16} />, path: '/contact' },
  ];

  return (
    <>
      
      <Box
        sx={{
          background: 'linear-gradient(180deg, #061625 0%, #153e6b 100%)',
          color: 'white',
          py: 1,
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: { xs: 1, sm: 3 },
              py: .5,
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" size="small">
                <Facebook size={16} />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram size={16} />
              </IconButton>
            </Box>
            <Typography variant="body2" component="span" sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
              {text.split('').map((char, index) => (
                <motion.span key={index} variants={textVariants} initial="hidden" animate="visible" custom={index}>
                  {char}
                </motion.span>
              ))}
            </Typography>
          </Box>
        </Container>
      </Box>


      <AppBar position="sticky" sx={{ bgcolor: 'white', boxShadow: 1 }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1.2, display: 'flex', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1.2, cursor: 'pointer', pr: 2 }}
                onClick={() => navigate('/')}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    width: '90px',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </motion.div>
arun
            <Box sx={{ flexGrow: 1 }} />


            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      startIcon={item.icon}
                      sx={{
                        color: location.pathname === item.path ? "white":"#212121",
                        fontWeight: 500,
                        fontSize: '13px',
                        background: location.pathname === item.path ? 'linear-gradient(180deg, #E35A0E 0%, #D64015 100%)' : 'transparent',
                        // border: location.pathname === item.path ? '1px solid #FC6A36' : 'transparent',
                        textTransform: 'capitalize',
                        borderRadius: 9,
                        border: '1px solid white',
                        px: 3,
                        '&:hover': {
                          // color: '#212121',
                          border: '1px solid #FC6A36',
                          backgroundColor: 'transparent',
                        },
                      }}
                      onClick={() => navigate(item.label === 'Home' ? '/' : `/${item.label.toLowerCase()}`)}
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
                <Box sx={{ display: 'flex', gap: 2, ml: 2, alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography variant="caption" color="primary.main" sx={{ fontWeight: 500, fontSize: '0.75rem' }}>
                      Call Us
                    </Typography>
                    <Typography variant="body2"  sx={{ fontWeight: 600,color:'#E35A0E' }}>
                      +91 63743 60962
                    </Typography>
                  </Box>
                  <IconButton color="primary">
                    <Phone size={20} />
                  </IconButton>
                </Box>
                <Button
                
                      startIcon={ <CircleUser size={16} />}
                      sx={{
                        color: "#212121",
                        fontWeight: 500,
                        fontSize: '13px',
                        border: '1px solid #FC6A36',
                        // background:  'linear-gradient(180deg, #E35A0E 0%, #D64015 100%)',
                        // border: location.pathname === item.path ? '1px solid #FC6A36' : 'transparent',
                        textTransform: 'capitalize',
                        borderRadius: 2,
                        // border: '1px solid white',
                        px: 3,
                        '&:hover': {
                          // color: '#212121',
                        
                          backgroundColor: 'transparent',
                        },
                      }}
                      
                    >
                      Sign in
                    </Button>
              </Box>
            ) : (
              <>
              
              
              <Button
                
              startIcon={ <CircleUser size={16} />}
              sx={{
                color: "#212121",
                fontWeight: 500,
                fontSize: '13px',
                border: '1px solid #FC6A36',
                // background:  'linear-gradient(180deg, #E35A0E 0%, #D64015 100%)',
                // border: location.pathname === item.path ? '1px solid #FC6A36' : 'transparent',
                textTransform: 'capitalize',
                borderRadius: 2,
                // border: '1px solid white',
                px: 3,
                '&:hover': {
                  // color: '#212121',
                
                  backgroundColor: 'transparent',
                },
                
                

              }}
              
            >
              Sign in
            </Button>
            <IconButton edge="end" color="primary" aria-label="menu" onClick={handleDrawerToggle}>
                <Menu />
              </IconButton>
            </>
              
            )}
          </Toolbar>
        </Container>
      </AppBar >


      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <IconButton onClick={handleDrawerToggle} color="primary">
            <X />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              sx={{ px: 2 }}
              onClick={() => {
                navigate(item.label === 'Home' ? '/' : `/${item.label.toLowerCase()}`);
                handleDrawerToggle();
              }}
            >
              <Button
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  color: 'secondary.main',
                  textTransform: 'capitalize',
                  fontWeight: 500,
                  fontSize: '1rem',
                  gap: 1.5,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                  },
                }}
                startIcon={item.icon}
              >
                {item.label}
              </Button>
            </ListItem>
          ))}

          <ListItem>
            <Box sx={{ width: '100%', textAlign: 'center', mt: 2 }}>
              <Typography variant="caption" color="primary.main" sx={{ fontWeight: 500 }}>
                Call Us
              </Typography>
              <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 600 }}>
                +91 63743 60962
              </Typography>
            </Box>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
