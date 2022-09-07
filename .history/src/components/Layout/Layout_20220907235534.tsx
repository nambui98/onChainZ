import { Button } from '@mui/material';
import * as React from 'react';
import Navbar from '../Navbar/Navbar';

import styles from './_layout.module.scss';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxWidth='lg'>
      <Box>
        <Typography variant='h1' textAlign='center'>
          Welcome to
        </Typography>

        <ImageContainer />

        <Typography variant='h4' textAlign='center'>
          Starter
        </Typography>
      </Box>
      <Box mt={2} gap={2}>
        <Button variant='contained'>MUI Button</Button>
        <Button variant='dashed'>MUI Button Dashed</Button>
        <MyButton />
      </Box>

      <Box>
        <Title variant='h4'>Helo From Storybook MUI</Title>
      </Box>
    </Container>

  )
}

export default Layout
