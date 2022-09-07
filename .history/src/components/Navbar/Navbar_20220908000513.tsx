import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <Box display={"flex"} justifyContent="space-between">
      <Image src={logo} alt="Logo" height={"100%"} />
      <Box sx={{ bgcolor: "#6F41FF", color: '#FFFFFF', padding: '31px 131px' }}>
        <Typography variant="h5">Your ads here</Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
