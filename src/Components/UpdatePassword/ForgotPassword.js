import React, { useState } from "react";
import { Button, Container, Col, Row, Card, Form } from "react-bootstrap";
import FormTextField from "../Common/FormTextField";
import { useFormik, Formik } from "formik";
import { useHistory } from "react-router-dom";
import AuthImage from "../../Assets/svg/authImage.svg";
import * as yup from "yup";


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

const ForgotPassword = () => {
  const [signInForm, setSignInForm] = useState({
    identifier: "",
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
                    <strong>Forgot Password</strong>
                   
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
export default ForgotPassword;
