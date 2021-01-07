import React, { useState } from "react";
import "./cmslogin.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCloseIcon
} from "mdbreact";

const CMSLoginForm = () => {
  const [login, setlogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = event => {
    event.preventDefault();
    var email = document.querySelector('[name="email"]').value;
    var pass = document.querySelector('[name="password"]').value;
    setlogin({ email: email, password: pass });
  };
  console.log(login);
  return (
    <div className="login-component">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBCloseIcon />
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">Log in</h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                
                <MDBInput
                  label="Your email"
                  group
                  type="text"
                  validate
                  name="email"
                  onChange={handleChange}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  name="password"
                  onChange={handleChange}
                />
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a href="#!" className="dark-grey-text font-weight-bold ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="danger"
                    type="button"
                    className="btn-block z-depth-2"
                  >
                    Log in
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default CMSLoginForm;
