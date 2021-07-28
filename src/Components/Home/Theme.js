import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

// A custom theme for this app
const theme = responsiveFontSizes(createMuiTheme({
  spacing: (value) => {
    let multiplyingFactor = 45;
    multiplyingFactor = window.matchMedia(`(min-width: ${theme.breakpoints.values.xs}px)`).matches ? 6 : multiplyingFactor; // > 0
    multiplyingFactor = window.matchMedia(`(min-width: ${theme.breakpoints.values.sm}px)`).matches ? 7 : multiplyingFactor; // > 600
    multiplyingFactor = window.matchMedia(`(min-width: ${theme.breakpoints.values.md}px)`).matches ? 8 : multiplyingFactor; // > 960
    multiplyingFactor = window.matchMedia(`(min-width: ${theme.breakpoints.values.lg}px)`).matches ? 8 : multiplyingFactor; // > 1280
    multiplyingFactor = window.matchMedia(`(min-width: ${theme.breakpoints.values.xl}px)`).matches ? 8 : multiplyingFactor; // > 1920
    return value * multiplyingFactor;
  },
  palette: {
    type: 'light',
    primary: {
      main: '#FFBB00',
    },
    secondary: {
      main: '#061566',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#04083F',
      secondary: 'rgba(0,0,0,0.54)',
    },
    zircon: {
      main: '#F4F6FF',
      contrastText: '#04083F',
    },
  },
  typography: {
    fontFamily: 'Poppins-Regular',
    h1: {
      fontSize: '2.25rem',
      fontFamily: 'Poppins-Bold',
    },
    h2: {
      fontSize: '2rem',
      fontFamily: 'Poppins-Bold',
    },
    h3: {
      fontSize: '1.75rem',
      fontFamily: 'Poppins-Bold',
    },
    h4: {
      fontSize: '1.5rem',
      fontFamily: 'Poppins-Bold',
    },
    h5: {
      fontSize: '1.25rem',
      fontFamily: 'Poppins-Bold',
    },
    h6: {
      fontSize: '1rem',
      fontFamily: 'Poppins-Bold',
    },
    body1: {
      fontSize: '1.25rem',
    },
    body2: {
      fontSize: '1rem',
    },
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#061566',
        color: '#fff',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 20,
      },
      // TODO: check if we can put this here, then does it play along with other features like icons etc
      // label: {
      //   textAlign: 'center',
      // },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
}));

export default theme;