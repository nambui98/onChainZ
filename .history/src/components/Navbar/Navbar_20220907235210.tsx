import { Button } from '@mui/material';
import * as React from 'react';

import styles from './_navbar.module.scss';

function Navbar() {
  return (
    <Button variant='contained' className={styles.blackButton}>
      Sass Button
    </Button>
  );
}

export default Navbar;
