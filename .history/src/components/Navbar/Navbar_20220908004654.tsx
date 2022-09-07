import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
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
        <Tabs value={value} aria-label="basic tabs example">
          <Tab onMouseMove={(e) => handleChange(e, 0)} label="Tin tức con" {...a11yProps(0)} />
          <Tab onMouseMove={(e) => handleChange(e, 1)} label="Tin nổi bật" {...a11yProps(1)} />
          <Tab onMouseMove={(e) => handleChange(e, 2)} label="Kiến thức" {...a11yProps(2)} />
          <Tab onMouseMove={(e) => handleChange(e, 3)} label="Chủ đề chuyên sâu" {...a11yProps(3)} />
        </Tabs>
      </Box>
    </>
  );
}

export default Navbar;
