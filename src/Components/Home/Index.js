import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typing from 'react-typing-animation';
import Lottie from 'react-lottie';

import howItWorksDesktopAnimationData from '../../Assets/json/howItWorksDesktopAnimation.json'
import howItWorksMobileAnimationData from '../../Assets/json/howItWorksMobileAnimation.json';
import kycAnimationData from '../../Assets/json/kycAnimationData.json'
// import MarketplaceAnimation from './MarketplaceAnimation';
import MarketplaceAnimation from './MarketPlaceAnimation'; 

import  {Strip}  from './Strip';
import theme from './Theme.js';
import landingBar from '../../Assets/svg/landingBar.svg';
import partners_video from '../../Assets/video/partners.mp4';
import surveyGraphic from '../../Assets/svg/surveyGraphic.svg';
import tchyonLogo from '../../Assets/png/tchyonLogo.png';


import './home.css';

class CyclicList {
  constructor(arr) {
    this.arr = arr;
    this.current = arr[0];
  }
  getPrev() {
    const currentIndex = this.arr.indexOf(this.current);
    return this.arr[currentIndex - 1] || this.arr[this.arr.length - 1];
  }
  next() {
    const currentIndex = this.arr.indexOf(this.current);
    this.current = this.arr[currentIndex + 1] || this.arr[0];
  }
}
const featureArray = ['Opportunities', 'Stocks', 'Mutual Funds', 'Cryptocurrency', 'Alternative Investments', 'Banking', 'Bonds'];
const featureList = new CyclicList(featureArray);

const LandingHeading = ({ children, className, color, component='h3', mt, noWrap, textAlign }) => {
  const isMobile = window.matchMedia(`(max-width: ${theme.breakpoints.values.md}px)`).matches; // coz useMediaQuery is jerky for typing animation
  const marginTop = mt ? theme.spacing(isMobile ? 8 : 0) : undefined; // remove this and add mt prop directly when it starts working
  return <Typography
    variant={isMobile ? 'h4' : 'h3'}
    component={component}
    className={className}
    color={color || 'inherit'}
    style={{ textAlign: textAlign || (isMobile ? 'center' : 'left'), marginTop }}
    noWrap={noWrap}
  >{children}</Typography>;
};
const LandingContent = ({ children, color, mt, textAlign }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const marginTop = mt ? theme.spacing(3) : undefined; // remove this and add mt prop directly when it starts working
  return <Typography
    variant="body1"
    component="p"
    color={color || 'inherit'}
    style={{ textAlign: textAlign || (isMobile ? 'center' : 'left'), marginTop }}
  >{children}</Typography>;
};
const LandingButton = ({ children, onClick, color }) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const mobileStyles = { width: '100%' };
  const StyledButton = withStyles({
    root: { ...(isMobile ? mobileStyles : {}), marginTop: theme.spacing(5) },
    label: { textAlign: 'center' },
  })(Button);
  return (
    <StyledButton variant="contained" color={color} size={isMobile ? 'medium' : 'large'} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
const BorderTop = () => {
  return <Hidden smDown><Box mb={3}><img src={landingBar} alt="border" width="136px" /></Box></Hidden>;
};
const makeId = feature => feature.replace(/\s/, '_');
const animateFeature = mode => feature => {
  const featureId = makeId(feature);
  document
    .querySelectorAll(`.${featureId}-${mode}`)
    .forEach(elt => elt.beginElement());
};
const activateFeature = animateFeature('activate');
const deactivateFeature = animateFeature('deactivate');

const MarketplaceAnimationLogo = () => {
  let width = 45;
  width = useMediaQuery(theme.breakpoints.up('xs')) ? 40 : width; // > 0
  width = useMediaQuery(theme.breakpoints.up('(min-width:400px)')) ? 56 : width; // > 400
  width = useMediaQuery(theme.breakpoints.up('(min-width:500px)')) ? 70 : width; // > 500
  width = useMediaQuery(theme.breakpoints.up('sm')) ? 80 : width; // > 600
  width = useMediaQuery(theme.breakpoints.up('md')) ? 50 : width; // > 960
  width = useMediaQuery(theme.breakpoints.up('lg')) ? 65 : width; // > 1280
  width = useMediaQuery(theme.breakpoints.up('xl')) ? 65 : width; // > 1920
  return <img
    src={tchyonLogo}
    alt="tchyon logo"
    style={{ position: 'absolute', width, top: '53%', left: '49%', transform: 'translate(-50%, -50%)' }}
  />;
};

const Landing1 = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [currentFeature, setCurrentFeature] = useState(() => featureList.current);
  const [key, setKey] = useState(Math.random());

  const onErased = () => {
    setKey(Math.random());
    featureList.next();
    setCurrentFeature(featureList.current);

    if (featureList.current === 'Opportunities') { // GO FROM: only one circle big -> TO: all circles big
      featureArray
        .filter(feature => !['Opportunities', featureList.getPrev()].includes(feature))
        .forEach(activateFeature);
    } else if (featureList.getPrev() === 'Opportunities') { // GO FROM: all circles big -> TO: only one circle big
      featureArray
        .filter(feature => !['Opportunities', featureList.current].includes(feature))
        .forEach(deactivateFeature);
    } else { // GO FROM: only one circle big -> TO: only all circles big
      activateFeature(featureList.current);
      deactivateFeature(featureList.getPrev());
    }
  };

  return (
    <main className="landing1-wrapper">
      <Strip className="intro">
        <Grid container alignItems="center" spacing={isMobile ? 4 : 10}>
          <Grid item xs={12} md={7} lg={8} xl={9} container direction="column" alignItems="flex-start">
            <LandingHeading>Millennial Friendly Financial Marketplace</LandingHeading>
            <LandingContent mt>Discover your next Favorite Financial Product.</LandingContent>
            <LandingContent noWrap>Sign up in a click.</LandingContent>
            <Hidden smDown>
              <LandingButton color="primary" onClick={() => {}}>Start your Journey with Us!</LandingButton>
            </Hidden>
          </Grid>
          <Grid item xs={12} md={5} lg={4} xl={3} className={isMobile ? 'flex-center' : 'flex-start-center'}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: kycAnimationData,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
              }}
            />
          </Grid>
        </Grid>
        <Hidden mdUp>
          <LandingButton color="primary" onClick={() => {}}>Start your Journey with Us!</LandingButton>
        </Hidden>
      </Strip>
      <Strip className="offerings" bg="zircon">
        <Grid container alignItems="center" spacing={isMobile ? 4 : 10}>
          <Grid item xs={12} md={6} className={isMobile ? 'flex-center' : 'flex-end-center'} style={{ position: 'relative' }}>
            <MarketplaceAnimation active={currentFeature} />
            <MarketplaceAnimationLogo />
          </Grid>
          <Grid item xs={12} md={6}>
            <BorderTop />
            <Box component="h3" textAlign="center" mt={isMobile ? 8 : 0}>
              <LandingHeading component="div">Next gen&#32;</LandingHeading>
              <div style={{ position: 'relative' }}>
                <LandingHeading color="primary" component="span">&nbsp;</LandingHeading>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: (isMobile ? '50%' : '0'),
                  transform: `translateX(${(isMobile ? '-50%' : '0')})`,
                }}>
                  <Typing
                    key={key}
                    cursor={<LandingHeading color="primary" component="span" className="landing1-cursor">|</LandingHeading>}
                    speed={500 / currentFeature.length}
                    onFinishedTyping={onErased}
                  >
                    <LandingHeading color="primary" component="span" noWrap>{currentFeature}</LandingHeading>
                    <Typing.Delay ms={1500} />
                    <Typing.Backspace count={currentFeature.length} />
                  </Typing>
                </div>
              </div>
              <LandingHeading component="div">delivered!</LandingHeading>
            </Box>
            <LandingContent mt>We Recycle the redundant information, so you can focus on what matters.</LandingContent>
            <LandingButton color="primary" onClick={() => {}}>Explore Marketplace now!</LandingButton>
          </Grid>
        </Grid>
      </Strip>
      <Strip className="features">
        <Grid container alignItems="center" spacing={isMobile ? 4 : 10}>
          <Grid item xs={12} md={5} lg={4} xl={3} className={isMobile ? 'flex-center' : 'flex-end-center'}>
            <img src={surveyGraphic} alt="survey" className="graphic" />
          </Grid>
          <Grid item xs={12} md={7} lg={8} xl={9}>
            <BorderTop />
            <LandingHeading mt>Simplifying Financial Decisions</LandingHeading>
            <LandingContent mt>We help you see the Financial landscape as you understand. Move Over Technical Jargon</LandingContent>
            <LandingButton color="primary" onClick={() => {}}>Learn More</LandingButton>
          </Grid>
        </Grid>
      </Strip>
      <Strip className="partner" bg="secondary">
        <Grid container direction="column" alignItems="center" spacing={isMobile ? 4 : 10}>
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <BorderTop />
            </Grid>
            <Grid item>
              <Box component="h3" textAlign="center" m={0}>
                <LandingHeading component="span">Sign-up to your Favorite Platform,&#32;</LandingHeading>
                <LandingHeading component="span" noWrap>'in a click'!</LandingHeading>
              </Box>
            </Grid>
            <Grid item>
              <LandingContent textAlign="center">Goodbye - long onboarding forms, uploading the same documents, long KYC wait times</LandingContent>
            </Grid>
          </Grid>
          <Grid item>
            <video autoPlay controls loop muted>
              <source src={partners_video} type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </Grid>
          <Grid item>
            <LandingButton color="primary" onClick={() => {}}>Onboard Now!</LandingButton>
          </Grid>
        </Grid>
      </Strip>
      <Strip className="sign-up">
        <Box className="flex-center">
          <Box>
            <BorderTop />
            <LandingHeading textAlign="center">How it Works?</LandingHeading>
          </Box>
          <Box mt={8} style={{ width: '100%' }}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={12} md={5} lg={4} xl={3}>
                <Lottie
                  options={{
                    loop: true,
                    autoplay: true,
                    animationData: isMobile ? howItWorksMobileAnimationData : howItWorksDesktopAnimationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }}
                />
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Box>
          <LandingButton color="primary" onClick={() => {}}>Onboard Now</LandingButton>
        </Box>
      </Strip>
    </main>
  );
};

export default Landing1;
