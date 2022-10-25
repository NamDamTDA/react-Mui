import React, { useEffect, useRef, useState } from "react";
import { Favorite, FavoriteBorder, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import "firebase/compat/auth";
import styles from "./styles.module.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import Path from "../../../routes/contants";
import { logInWithEmailAndPassword, signInWithGoogle } from "../../../firebase/firebaseConfig";

const Login = () => {
  const loginForm = useRef("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    checkBox: false,
    showPassword: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  };

  const handleClickCheckBox = () => {
    setUser({
      ...user,
      checkBox: !user.checkBox,
    });
  };

  const handleLogin = () => {};

  useEffect(() => {});

  return (
    <div>
      <Box className={styles.login_area}>
        <ValidatorForm className={styles.login_main} ref={loginForm} onSubmit={handleLogin}>
          <Typography component="h3">Login</Typography>
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
            <TextValidator
              id="password"
              autoComplete="new-password"
              color="secondary"
              label="Password"
              type={user.showPassword ? "text" : "password"}
              variant="outlined"
              onChange={handleChange}
              name="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" className={styles.hide_button}>
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {user.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={user.password}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            
            <Link to={Path.resetPassword}>Lost your password?</Link>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  checked={user.checkBox ? true : false}
                  onChange={handleClickCheckBox}
                />
              }
              label="Remember me"
            />
            <Button onClick={() => logInWithEmailAndPassword(user.email, user.password)}>
              Login
            </Button>
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

export default Login;
