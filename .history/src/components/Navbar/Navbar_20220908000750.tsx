import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <>
      <Box display={"flex"} justifyContent="space-between" alignItems={'center'}>
        <Box>
          <Image src={logo} alt="Logo" />
        </Box>
        <Box sx={{ bgcolor: "#6F41FF", color: '#FFFFFF', padding: '31px 131px' }}>
          <Typography variant="h5">Your ads here</Typography>
        </Box>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
    </>
  );
}

export default Navbar;