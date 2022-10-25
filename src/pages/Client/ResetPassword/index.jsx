import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import "firebase/compat/auth";
import styles from "./styles.module.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import Path from "../../../routes/contants";
import { sendPasswordReset, signInWithGoogle } from "../../../firebase/firebaseConfig";

const ResetPassword = () => {
  const passForm = useRef("");
  const [user, setUser] = useState({
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = () => {};

  useEffect(() => {});

  return (
    <div>
      <Box className={styles.login_area}>
        <ValidatorForm className={styles.login_main} ref={passForm} onSubmit={handleSubmit}>
          <Typography component="h3">Reset password</Typography>
          <Box className={styles.account_form}>
            <TextValidator
              autoFocus
              id="user"
              name="email"
              color="secondary"
              label="Email"
              variant="outlined"
              onChange={handleChange}
              value={user.email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
            />
            <Typography component="p">Enter your email to send link</Typography>
            <Button onClick={() => sendPasswordReset(user.email)}>Send</Button>
            <Link to={Path.signUp}>Don't have an account? SignUp!</Link>
            <Button className="login__btn login__google" onClick={signInWithGoogle}>
              Login with Google
            </Button>
          </Box>
        </ValidatorForm>
      </Box>
    </div>
  );
};

export default ResetPassword;
