import React from "react";
import "./latest.css";
import latestAboutPageBitCoin from "../../Assets/svg/latestAboutPageBitCoin.svg";
import latestAboutPageRocketIcon from "../../Assets/svg/latestAboutPageRocketIcon.svg";
import latestAboutPageSpace from "../../Assets/svg/latestAboutPageSpace.svg";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const LatestAbout = () => {
  return (
    <>
      <div className="bg-color">
        <Container fluid>
          <Row>
            <Col md={6}>
              <Col md={3} />
              <Col md={9} className="content-center" style={{ top: "30%" }}>
                <div className="font-white bold main-heading">
                  We are creating the simplest way to discover and signup for
                  Financial Services
                </div>
                <Button variant="warning" className="marketplace-btn btn">
                  <strong>EXPLORE MARKETPLACE</strong>
                </Button>
              </Col>
              {/* <Col md={3} /> */}
            </Col>
            <Col md={6}>
              <img
                className="half-width"
                src={latestAboutPageBitCoin}
                alt="bit coin"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col md={6}>
              <img
                className="half-width rocket-icon"
                src={latestAboutPageRocketIcon}
                alt="bit coin"
              />
            </Col>
            <Col md={6}>
              {/* <Col md={3} /> */}
              <Col md={12} className="content-center" style={{ top: "15%" }}>
                <div className="font-black bold main-heading">
                  Tchyon surfaces the best new platforms. It’s a place for
                  enthusiasts to share and geek out about the latest
                  developments in Finance and Technology.
                </div>
              </Col>
              {/* <Col md={3} /> */}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-color">
        <Container fluid>
          <Row>
            <Col md={6}>
              {/* <Col md={3} /> */}
              <Col md={12} className="content-center" style={{ top: "20%" }}>
                <div className="font-white">
                  {/* <div className="border"></div> */}
                  <h4 className="main-heading">OUR MISSION</h4>
                  <div className="sub-heading">
                    We’re empowering the next generation of individuals and
                    businesses by making it easier than ever to learn, discover
                    and signup for financial Services.
                  </div>
                </div>
              </Col>
              {/* <Col md={3} /> */}
            </Col>
            <Col md={6}>
              <img
                style={{ width: "80%",marginBottom:"-15px" }}
                className="half-width"
                src={latestAboutPageSpace}
                alt="bit coin"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div style={{ height: "200px", marginTop: "50px" }}>
        <Container fluid>
          <Row style={{ textAlign: "center" }}>
            <Col md={5} />
            <Col md={3}>
              <div style={{ color: "#04083F" }} >
                <strong >
                  <h5 className="main-heading">WORK WITH US</h5>
                </strong>
              </div>

              <div style={{ marginTop: "30px" }} >
                <div className="sub-heading">Reach out to us</div>
                <div style={{ color: "#00357C" }} className="sub-heading">info@tchyon.com</div>
              </div>
            </Col>
            <Col md={4} />
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LatestAbout;
