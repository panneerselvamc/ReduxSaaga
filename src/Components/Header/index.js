import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import HeaderLogo from "../../Assets/png/tchyonLogo.png";
import { useHistory,withRouter } from "react-router-dom";
const Header = () => {
  const history = useHistory();
  return (
    <div style={{ background: "#04083f",position:"sticky",top:"0%",width:"100%",overflow:"hidden",zIndex:"10" }}>
      <Navbar>
        <Navbar.Brand href="/home">
          <img src={HeaderLogo} alt="logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <Button
            variant="outline-light"
            className="mr-sm-2"
            onClick={() => history.push("/home")}
          >
            Home
          </Button>
          <Button
            variant="outline-light"
            className="mr-sm-2"
            onClick={() => history.push("/about")}
          >
            About
          </Button>
          <Button variant="outline-light" className="mr-sm-2">
            Marketplace
          </Button>
          <Button variant="outline-light" className="mr-sm-2"  onClick={() => history.push("/signup")}>
            Sign Up
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};
export default withRouter(Header);
