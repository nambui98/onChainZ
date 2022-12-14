
import Image from 'next/image';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from '../../../public/logo.png'
import styles from './_navbar.module.scss';
import { Typography } from '@mui/material';
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}
const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: '#6F41FF',
  },
});
interface StyledTabProps {
  label: string;
  onMouseMove: any
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'uppercase',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#fff',
  transition: 'color .3s',
  '&.Mui-selected': {
    color: '#6F41FF',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
  '&:hover': {
    color: '#6F41FF'
  }
}));
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
        <StyledTabs value={value} onChange={() => { }} aria-label="basic tabs example">
          <StyledTab onMouseMove={(e: any) => handleChange(e, 0)} label="Tin t???c con" {...a11yProps(0)} />
          <StyledTab onMouseMove={(e: any) => handleChange(e, 1)} label="Tin n???i b???t" {...a11yProps(1)} />
          <StyledTab onMouseMove={(e: any) => handleChange(e, 2)} label="Ki???n th???c" {...a11yProps(2)} />
          <StyledTab onMouseMove={(e: any) => handleChange(e, 3)} label="Ch??? ????? chuy??n s??u" {...a11yProps(3)} />
        </StyledTabs>
      </Box>
    </>
  );
}

export default Navbar;
