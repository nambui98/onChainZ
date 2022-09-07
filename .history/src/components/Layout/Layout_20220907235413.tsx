import { Button } from '@mui/material';
import * as React from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './_layout.module.scss';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
