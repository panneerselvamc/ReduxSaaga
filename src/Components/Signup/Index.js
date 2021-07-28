import React, { useState, useEffect } from "react";
import { Form, Card, InputGroup } from "react-bootstrap";
import * as yup from "yup";
import { Button, Container, Col, Row } from "react-bootstrap";
import { useFormik, Formik } from "formik";
import Typography from "@material-ui/core/Typography";
import AuthImage from "../../Assets/svg/authImage.svg";
import FormTextField from "../Common/FormTextField";
import OTP from "../OTP";
import { useHistory } from "react-router-dom";
import OtpStage from "./OtpStage";
import { connect } from "react-redux";

const SignUp = (props) => {
  let history=useHistory();
  const [stage, setStage] = useState("signup");
  const [signupForm, setSignupForm] = useState({
    name: "",
    captchya: "",
    msisdn: "",
    emailId: "",
    password: "",
    // friends: [{ firstName: "John", lastName: "Snow" }],
  });
  const [otp, setOtp] = useState("");
  useEffect(() => {
    return () => {
      setStage("signup");
      setOtp("");
    };
  }, []);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const passwordRegExp =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
  const schema = yup.object({
    name: yup
      .string()
      .min(2, "*Names must have at least 2 characters")
      .max(100, "*Names can't be longer than 100 characters")
      .required("*Name is required"),
    msisdn: yup
      .string()
      .max(10, "*Mobile Number should not be more than 10 Digits")
      .min(10, "*Mobile Number should not be less than 10 Digits")
      .required(),
    emailId: yup.string().required(),
    password: yup
      .string()
      .matches(
        passwordRegExp,
        "Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required(),
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #061566 -6%, #04083f 111%)",
          height: "auto",
          paddingBottom:"50px"
        }}
      >
        <Container style={{ paddingTop: "9vh" }}>
          <Row>
            {stage === "signup" && (
              <Col md={4} >
                <Card>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      <strong>Sign up</strong>
                    </Card.Title>
                    <Formik
                      validationSchema={schema}
                      onSubmit={(values) => {
                        let payload = values;
                        payload.callBack = setStage;
                        setSignupForm(values);
                        props.save(values);
                      }}
                      initialValues={signupForm}
                    >
                      {({
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        isValid,
                        isSubmitting,
                      }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                          <Col>
                            <FormTextField
                              as={Col}
                              sm="4"
                              controlId="validationFormik01"
                              label="Name"
                              type="text"
                              name="name"
                            />
                          </Col>
                          <Col>
                            <FormTextField
                              as={Col}
                              sm="4"
                              controlId="validationFormik02"
                              label="Mobile Number"
                              type="text"
                              name="msisdn"
                            />
                          </Col>
                          <Col>
                            <FormTextField
                              as={Col}
                              sm="4"
                              controlId="validationFormik03"
                              label="Email Id"
                              type="email"
                              name="emailId"
                            />
                          </Col>

                          <Col>
                            <FormTextField
                              as={Col}
                              sm="4"
                              controlId="validationFormik04"
                              label="Password"
                              type="password"
                              name="password"
                            />
                          </Col>
                          <Col style={{ textAlign: "center" }}>
                            <span style={{fontSize:"15px"}}>
                              An OTP will be send to your number for
                              verification.
                            </span>
                          </Col>

                          <Col style={{ textAlign: "center" }}>
                            <Button
                              style={{
                                width: "85%",
                                borderRadius: "50px",
                                padding: "3px",
                                marginTop: "10px",
                              }}
                              variant="warning"
                              disabled={!isValid || isSubmitting}
                              as="input"
                              size="lg"
                              type="submit"
                              value="CONTINUE"
                            />
                          </Col>
                          <Col>
                          <div style={{marginTop:"7px"}}>Already have an account? <span onClick={()=>history.push('/signin')} style={{color:"#04083F",cursor:"pointer"}}>Sign in</span></div>
                          </Col>
                        </Form>
                      )}
                    </Formik>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {stage == "otp" && (
              <OtpStage
                msisdn={signupForm.msisdn}
                otp={otp}
                setOtp={setOtp}
                setStage={setStage}
              />
            )}
            <Col md={1} />
            <Col md={7}>
              <img src={AuthImage} alt="tchyon onboarding image" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    save: (data) => dispatch({ type: "signupSaga", data: data }),
  };
};

// export default SignUp;
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
