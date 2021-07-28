import React from "react";

import { Form, Card, InputGroup } from "react-bootstrap";

import { Button, Container, Col } from "react-bootstrap";

import Typography from "@material-ui/core/Typography";

import OTP from "../OTP";
const OtpStage = ({ msisdn, otp, setOtp, setStage }) => {
  return (
    <>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                <strong>Verify mobile number</strong>
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                An OTP has been sent to your mobile number
              </Typography>
            </Card.Title>
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Mobile</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Mobile"
                  aria-describedby="inputGroupPrepend"
                  name="mobile"
                  defaultValue={msisdn}
                  disabled
                />
                <InputGroup.Text
                  id="inputGroupPrepend"
                  onClick={() => setStage("signup")}
                >
                  Change
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Col>
              <Typography variant="button" display="block" gutterBottom>
                Verify the One Time Password
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                Provide the OTP Sent to your number
              </Typography>
            </Col>
            <OTP otp={otp} setOtp={setOtp} inputSize={4} />
            <Col style={{ textAlign: "center" }}>
              <Button
                style={{ marginTop: "30px" }}
                variant="success"
                as="input"
                size="lg"
                value="Create an Account"
              />
            </Col>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default OtpStage;
