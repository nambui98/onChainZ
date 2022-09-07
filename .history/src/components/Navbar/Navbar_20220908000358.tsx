import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <Box display={"flex"} justifyContent="space-between">
      <Image src={logo} alt="Logo" />
      <Box sx={{ width: '448px', height: '96px', bgcolor: "#6F41FF", color: '#FFFFFF' }}>
        <Typography variant="h4">Your ads here</Typography>
      </Box>
    </Box>
  );
}

export default Navbar;
