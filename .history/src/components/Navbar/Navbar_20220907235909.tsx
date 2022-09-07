import { Box, Button } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../public/logo.png'
import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <Box>
      <Image src={logo} />
    </Box>
  );
}

export default Navbar;
