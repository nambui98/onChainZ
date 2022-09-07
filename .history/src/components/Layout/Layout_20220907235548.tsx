import { Button, Container } from '@mui/material';
import * as React from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './_layout.module.scss';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth='lg'>

      <Navbar />
      <main>{children}</main>

    </Container>

  )
}

export default Layout
