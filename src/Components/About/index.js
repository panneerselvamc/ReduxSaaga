import React from "react";
import "./about.css";
import Button from "@material-ui/core/Button";
import HarshImg from "../../Assets/png/harsh.png";
import SijoImg from "../../Assets/png/sijoImg.png";
import SmitImg from "../../Assets/png/smit.png";
import VigramanImg from "../../Assets/png/vigramanImg.png";
import InvestGirlIcon from "../../Assets/svg/investGirlIcon.svg";
import StuckGirlIcon from "../../Assets/svg/stuckGirlIcon.svg";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <>
      <div className="aboutPageContainer">
        <Helmet>
          <title>Tchyon - About</title>
        </Helmet>
        <div className="aboutWrapper">
          <div className="backgroundWrapper">
            <div className="aboutContent flexBox-center">
              <div className="leftContainer">
                <div className="backgroundWrap ">
                  <div className="blackBorder" />
                  <div className="aboutHeadline">
                    We are creating the simplest way to discover and signup for
                    Financial Services
                  </div>
                  {/* <div className="aboutusText">
                  Building a Network of Digital Identity
                </div> */}
                  {/* <Button style={{ marginTop: '30px' }}>
                  GET STARTED
                  <div className="arrowWhite" />
                </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="questionWrapper">
          <div className="backgroundWrapper">
            <div className="questionBlock-flex">
              <div className="questionBlock">
                <img src={InvestGirlIcon} className="questionBlockImage" />
                <div className="blackBorderLine" />
                <div className="boldText">Don’t know where to invest?</div>
                <div className="mediumText">
                  Discover Fintech innovations and achieve your financial goals
                </div>
              </div>
              <div className="questionBlock">
                <img src={StuckGirlIcon} className="questionBlockImage" />
                <div className="blackBorderLine" />
                <div className="boldText">Stuck in the messy KYC loop?</div>
                <div className="mediumText">
                  Recycle single KYC across multiple platforms
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              color="primary"
              style={{
                width: "200px",
                height: "50px",
                fontSize: "13px",
                marginTop: "50px",
                padding: "0px 8px",
              }}
              onClick={() => history.push("/explore")}
            >
              EXPLORE MARKET PLACE
            </Button>
          </div>
        </div>
        <div className="aboutUsPlatform">
          <div className="backgroundWrapper">
            <div className="platformAboutText">
              Tchyon surfaces the best new platforms. It’s a place for
              enthusiasts to share and geek out about the latest developments in
              Finance and Technology.
            </div>
            {/* <Button style={{ width: "150px", height: "45px", fontSize: "13px", marginTop: "50px", padding: "0px 8px" }} handleCallBack={() => history.push("/explore")}>
             CONTACT US
            </Button> */}
          </div>
        </div>
        {/* <div className="aboutContent ourStoryWrapper">
        <div className="contentWrapper">
          <div className="leftContent">
            <div className="whiteBorder" style={{ background: '#3b3b3b', width: '45px' }} />
            <div className="boldText">About Tchyon</div>
            <div className="ourStoryContent">
              In line with ‘Tachyon” which is a particle faster than the speed of light, we are striving to create a network that is fast and easy to use. The current state of documentation infrastructure in the Financial Ecosystem is archaic and extremely inefficient. As a part of this ecosystem, we have faced many challenges and decided to solve it for everyone.
            </div>
            <Button style={{ width: "130px", height: "40px", fontSize: "14px", marginTop: "35px", padding: "0px 8px" }}>
              CONTACT US
            </Button>
          </div>
          <div className="rightContent mobileDisplayNone" />
        </div>
      </div> */}

        <div className="ourMissionWrapper">
          <div
            className="whiteBorder"
            style={{ backgroundColor: "#3b3b3b", width: "45px" }}
          />
          <div className="boldText">Our Mission</div>
          <div className="missionText">
            We’re empowering the next generation of individuals and businesses
            by making it easier than ever to learn, discover and signup for
            financial Services.
          </div>
          <div className="flexBox-column missionFoldWrapper">
            {/* <div className="">
            <div className="numberGlow glowOne">
              1
            </div>
            <div className="missionFold blueMission" style={{ marginLeft: '450px' }}>
              Creating a community of Gen-Z & Millennial users to help them discover and engage with the latest Fintech products.
          </div>
          </div>


          <div className="">
            <div className="numberGlow glowTwo">
              2
            </div>
            <div className="missionFold orangeMission" style={{ marginRight: '300px' }}>
              Connecting data from corporate silos, empowering the users to have more control over how it’s used and stored.
             </div>
          </div>

          <div className="">
            <div className="numberGlow glowThree">
              3
           </div>
            <div className="missionFold greenMission" style={{ marginLeft: '450px' }}>
              Building a system of accessibility, reward, and discovery, which reinforces the network
          </div>
          </div>*/}

            <div className="missionDivider">
              <div className="leftMissionDivider missionImageBlock1" />
              <div className="rightMissionDivider">
                Selecting and using the next-gen financial products requires
                knowledge and insights. Every day, people leap into the unknown
                with the hope that they can manage their finances better.
              </div>
            </div>
            <div className="missionDivider">
              <div className="leftMissionDivider">
                That journey is stressful and challenging, especially for those
                without prior experience or knowledge.
              </div>
              <div className="rightMissionDivider missionImageBlock2" />
            </div>
            <div className="missionDivider">
              <div className="leftMissionDivider missionImageBlock3" />
              <div className="rightMissionDivider">
                We knew this when we created Tchyon. We wanted to provide a
                positive force for change, one that’s committed to supporting
                millions of new individuals and businesses on their financial
                journey.
              </div>
            </div>
          </div>
        </div>

        <div className="ourTeam">
          <div
            className="whiteBorder"
            style={{ backgroundColor: "#3b3b3b", width: "45px" }}
          />
          <div className="boldText">Our Team</div>
        </div>
        <div className="bottomContainer flexBox-center">
          <div className="backgroundWrapper absolutePositioner ">
            <div className="singleTeam">
              <div className="teamContainer devOne">
                <img src={HarshImg} alt="harsh" />
              </div>
              <div className="teamCard flexBox-column">
                <div className="boldText">Harsh Sharma</div>
                <div className="lightBold">Co-Founder & CEO</div>
              </div>
            </div>
            <div className="singleTeam">
              <div className="teamContainer devTwo">
                <img src={SmitImg} alt="smit" />
              </div>
              <div className="teamCard flexBox-column">
                <div className="boldText">Smit Choksi</div>
                <div className="lightBold">Co-Founder & COO</div>
              </div>
            </div>
            <div className="singleTeam">
              <div className="teamContainer devThree">
                <img src={VigramanImg} alt="vigraman" />
              </div>
              <div className="teamCard flexBox-column">
                <div className="boldText">Vigraman V</div>
                <div className="lightBold">Product Developer</div>
              </div>
            </div>
            <div className="singleTeam">
              <div className="teamContainer devFour">
                <img src={SijoImg} alt="sijo" />
              </div>
              <div className="teamCard flexBox-column">
                <div className="boldText">Sijo P Cherian</div>
                <div className="lightBold">UI/UX Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
