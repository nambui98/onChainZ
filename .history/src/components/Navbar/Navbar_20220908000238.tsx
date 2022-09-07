import { Box, Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <Box display={"flex"} justifyContent="space-between">
      <Image src={logo} alt="Logo" />
      <Box sx={{ width: '448px', height: '96px', bgcolor: "#6F41FF" }}>
        Your ads here
      </Box>
    </Box>
  );
}

export default Navbar;
