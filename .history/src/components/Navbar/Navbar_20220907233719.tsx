import { Button } from '@mui/material';
import * as React from 'react';

import styles from './_header.module.scss';

function Header() {
  return (
    <Button variant='contained' className={styles.blackButton}>
      Sass Button
    </Button>
  );
}

export default Header;
