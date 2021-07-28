import React from "react";
import tchyonLogo from "../../Assets/png/tchyonLogo.png";
const MarketplaceAnimationLogo = () => {
    let width = 65;
    // width = useMediaQuery(theme.breakpoints.up('xs')) ? 40 : width; // > 0
    // width = useMediaQuery(theme.breakpoints.up('(min-width:400px)')) ? 56 : width; // > 400
    // width = useMediaQuery(theme.breakpoints.up('(min-width:500px)')) ? 70 : width; // > 500
    // width = useMediaQuery(theme.breakpoints.up('sm')) ? 80 : width; // > 600
    // width = useMediaQuery(theme.breakpoints.up('md')) ? 50 : width; // > 960
    // width = useMediaQuery(theme.breakpoints.up('lg')) ? 65 : width; // > 1280
    // width = useMediaQuery(theme.breakpoints.up('xl')) ? 65 : width; // > 1920
    return <img
      src={tchyonLogo}
      alt="tchyon logo"
      style={{ position: 'absolute', width, top: '53%', left: '49%', transform: 'translate(-50%, -50%)' }}
    />;
  };
  export default MarketplaceAnimationLogo;