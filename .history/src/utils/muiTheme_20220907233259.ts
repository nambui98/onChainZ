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
      main: '#ffffff',
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
          transition: 'all .5s',
          height: '38px',
          '&:hover': {
            color: theme.palette.primary.main,
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderColor: theme.palette.primary.main
          }
        },
      },
      {
        props: { variant: 'outlined' },
        style: {
          textTransform: 'none',
          backgroundColor: 'transparent',
          border: `1px solid  ${theme.palette.primary.main}`,
          borderRadius: '8px',
          color: theme.palette.primary.main,
          transition: 'all .5s',
          height: '38px',
          '&:hover': {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main,
            boxShadow: 'none',
            borderColor: theme.palette.primary.main
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
