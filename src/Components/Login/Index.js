import React, { useState } from "react";
import { Button, Container, Col, Row, Card, Form } from "react-bootstrap";
import FormTextField from "../Common/FormTextField";
import { useFormik, Formik } from "formik";
import { useHistory } from "react-router-dom";
import AuthImage from "../../Assets/svg/authImage.svg";
import * as yup from "yup";
import "./login.css";

const schema = yup.object({
  identifier: yup
    .string()
    .min(2, "*identifier must have at least 2 characters")
    .max(100, "*identifier can't be longer than 100 characters")
    .required("*identifier is required"),

  //   password: yup
  //     .string()
  //     .min(8, "The length of the Password is less - Please Recheck!!")
  //     .min(20, "The length of the Password is high - Please Recheck!!")
  //     .required(),
});

const Index = () => {
  const [signInForm, setSignInForm] = useState({
    identifier: "",
    password: "",
  });
  const [stage, setStage] = useState("identifier");
  let history = useHistory();
  return (
    <div>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #061566 -6%, #04083f 111%)",
          height: "100vh",
        }}
      >
        <Container style={{ paddingTop: "9vh" }}>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ textAlign: "center" }}>
                    <strong>Sign In</strong>
                  </Card.Title>
                  <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                      // let payload = values;
                      // payload.callBack = setStage;
                      // setSignupForm(values);
                      // props.save(values);
                    }}
                    initialValues={signInForm}
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
                        {stage == "identifier" && (
                          <>
                            <Col>
                              <FormTextField
                                as={Col}
                                sm="4"
                                controlId="validationFormik01"
                                label="Email Id or Mobile Number"
                                type="text"
                                name="identifier"
                              />
                            </Col>
                          </>
                        )}

                        {stage == "password" && (
                          <Col>
                            <FormTextField
                              as={Col}
                              sm="4"
                              controlId="validationFormik02"
                              label="Password"
                              type="password"
                              name="password"
                            />
                          </Col>
                        )}

                        <Col style={{ textAlign: "center" }}>
                          <Button
                            disabled={!isValid || isSubmitting}
                            variant="warning"
                            as="input"
                            size="lg"
                            type="submit"
                            value="CONTINUE"
                            style={{
                              width: "85%",
                              borderRadius: "50px",
                              padding: "3px",
                            }}
                          />
                        </Col>
                      </Form>
                    )}
                  </Formik>
                  {stage == "identifier" && (
                    <Col style={{ textAlign: "center", marginTop: "10px" }}>
                      <span style={{ fontSize: "15px" }}>
                        * By continuing, you agree to Tchyon’s Terms and
                        Conditions and Privacy Notice
                      </span>

                      <br />
                      <div className="separator">Not a member yet?</div>
                      <Button
                        onClick={() => history.push("/signup")}
                        variant="light"
                        as="input"
                        size="lg"
                        type="button"
                        value="CREATE AN ACCOUNT"
                        style={{
                          width: "85%",
                          borderRadius: "50px",
                          padding: "3px",
                          marginTop: "10px",
                        }}
                      />
                      <div style={{ marginTop: "7px" , fontSize:"15px"}}>
                        Already have an account?{" "}
                        <span
                          onClick={() => history.push("/forgot-password")}
                          style={{ color: "#04083F", cursor: "pointer",fontSize:"15px" }}
                        >
                          Forgot Password
                        </span>
                      </div>
                    </Col>
                  )}
                </Card.Body>
              </Card>
            </Col>

            <Col md={1} />
            <Col md={7}>
              <img src={AuthImage} alt="tchyon onboarding image" />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Index;
