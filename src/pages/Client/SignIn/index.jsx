import React, { useRef, useState } from "react";
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
import styles from "./styles.module.css";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Link } from "react-router-dom";
import Path from "../../../routes/contants";

const Login = () => {
  const login = useRef("");
  const [user, setUser] = useState({
    email: "",
    password: "",
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

  const handleSubmit = () => {};

  return (
    <div>
      <Box className={styles.login_area}>
        <ValidatorForm className={styles.login_main} ref={login} onSubmit={handleSubmit}>
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
            <Typography component="a" href="#" target="_blank">
              Lost your password?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox color="secondary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Remember me"
            />
            <Button type="submit">Login</Button>
            <Link to={Path.signUp}>Don't have an account? SignUp!</Link>
          </Box>
        </ValidatorForm>
      </Box>
    </div>
  );
};

export default Login;
