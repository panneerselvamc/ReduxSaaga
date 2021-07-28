import React, { useState } from "react";
import { Button, Container, Col, Row, Card, Form } from "react-bootstrap";
import FormTextField from "../Common/FormTextField";
import { useFormik, Formik } from "formik";
import { useHistory } from "react-router-dom";
import AuthImage from "../../Assets/svg/authImage.svg";
import * as yup from "yup";

const passwordRegExp =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

const schema = yup.object({
    
    password: yup
      .string()
      .matches(
        passwordRegExp,
        "Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required(),
      confirmation: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .matches(
        passwordRegExp,
        "Minimum eight and maximum 20 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required(),
  });
const ResetPassword = () => {
  const [resetPasswordForm, setResetPasswordForm] = useState({
    password: "",
    confirmation: "",
  });
 
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
                    <strong>Reset Password</strong>
                   
                  </Card.Title>
                  <div style={{float:"left",fontSize:"15px",textAlign:"center",marginBottom:"10px",color:"rgba(59, 59, 59, 0.5)"}}>Enter the email address or mobile number registered with Tchyon</div>
                  <Formik
                    validationSchema={schema}
                    onSubmit={(values) => {
                      // let payload = values;
                      // payload.callBack = setStage;
                      // setSignupForm(values);
                      // props.save(values);
                    }}
                    initialValues={resetPasswordForm}
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
                                label="Enter new password"
                                type="password"
                                name="password"
                              />
                            </Col>
                            <Col>
                              <FormTextField
                                as={Col}
                                sm="4"
                                controlId="validationFormik02"
                                label="Re-type password"
                                type="password"
                                name="confirmation"
                              />
                            </Col>
                         

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
export default ResetPassword;
