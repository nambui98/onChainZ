import { green, orange } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

/* * need to use module augmentation for the theme to accept the value that just added **/

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

let theme = createTheme({
  //edit this to a color pallete your app
  palette: {
    primary: {
      main: '#6F41FF',
    },
    secondary: {
      main: orange[500],
    },
  },
});

const components: any = createTheme(theme, {
  MuiButton: {
    //add variants to button component
    variants: [
      {
        props: { variant: 'dashed' },
        style: {
          textTransform: 'none',
          border: `2px dashed ${theme.palette.primary.main}`,
        },
      },
      {
        props: { variant: 'contained' },
        style: {
          textTransform: 'none',
          backgroundColor: theme.palette.primary.main,
          border: `1px solid  ${theme.palette.primary.main}`,
          borderRadius: '8px',
          '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
          }
        },
      },
    ],
    styleOverrides: {
      root: {
        fontSize: '1em',
      },
    },
  },
});

// Create a theme instance.
theme = createTheme({
  components,
});
// add responsive MUI responsiveFontSize
theme = responsiveFontSizes(theme);

export default theme;
