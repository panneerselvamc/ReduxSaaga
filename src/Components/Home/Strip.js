import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import theme from './Theme.js';

export const Strip = ({ children, className, bg, style }) => {
  let padding;
  padding = useMediaQuery(theme.breakpoints.up('xs')) ? theme.spacing(5, 3) : padding; // > 0
  padding = useMediaQuery(theme.breakpoints.up('sm')) ? theme.spacing(5, 3) : padding; // > 600
  padding = useMediaQuery(theme.breakpoints.up('md')) ? theme.spacing(6) : padding; // > 960
  padding = useMediaQuery(theme.breakpoints.up('lg')) ? theme.spacing(8) : padding; // > 1280
  padding = useMediaQuery(theme.breakpoints.up('xl')) ? theme.spacing(10) : padding; // > 1920

  let backgroundColor, color;
  if (bg === 'primary') {
    backgroundColor = theme.palette.primary.main;
    color = theme.palette.primary.contrastText;
  } else if (bg === 'secondary') {
    backgroundColor = theme.palette.secondary.main;
    color = theme.palette.secondary.contrastText;
  } else if (bg === 'zircon') {
    backgroundColor = theme.palette.zircon.main;
    color = theme.palette.zircon.contrastText;
  } else { // default
    backgroundColor = theme.palette.background.default;
    color = theme.palette.text.primary;
  }
  return (
    <Box className={className} style={{ backgroundColor, color, padding, ...style }}>
      <Box style={{ padding }}>
        <Container fixed>
          {children}
        </Container>
      </Box>
    </Box>
  );
};
