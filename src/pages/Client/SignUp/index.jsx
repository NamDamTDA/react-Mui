import React, { useEffect, useRef, useState } from "react";
import { Star, StarBorder, Visibility, VisibilityOff } from "@mui/icons-material";
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

const SignUp = () => {
  const signUp = useRef("");
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    passwordRepeat: "",
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

  useEffect(() => {
    if (!ValidatorForm.hasValidationRule("isPasswordMatch")) {
      ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
        if (value !== user.password) {
          return false;
        }

        return true;
      });
    }
    
    return () => {
      if (ValidatorForm.hasValidationRule("isPasswordMatch")) {
        ValidatorForm.removeValidationRule("isPasswordMatch");
      }
    };
  }, [user.passwordRepeat, user.password]);

  return (
    <div>
      <Box className={styles.signup_area}>
        <ValidatorForm className={styles.signup_main} ref={signUp} onSubmit={handleSubmit}>
          <Typography component="h3">SignUp</Typography>
          <Box className={styles.account_form}>
            <TextValidator
              autoFocus
              id="name"
              name="fullName"
              color="secondary"
              label="Full Name"
              variant="outlined"
              onChange={handleChange}
              value={user.fullName}
              validators={["required", "minStringLength:4", "maxStringLength:255"]}
              errorMessages={[
                "This field is required",
                "Min name is not below 3",
                "Max name is not over 255",
              ]}
            />
            <TextValidator
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
              name="password"
              value={user.password}
              validators={["required"]}
              errorMessages={["This field is required"]}
            />
            <TextValidator
              id="passwordRepeat"
              color="secondary"
              label="Confirm Password"
              type={user.showPassword ? "text" : "password"}
              variant="outlined"
              onChange={handleChange}
              name="passwordRepeat"
              value={user.passwordRepeat}
              validators={["isPasswordMatch", "required"]}
              errorMessages={["Password mismatch", "This field is required"]}
            />
            <FormControlLabel
              control={<Checkbox color="secondary" icon={<StarBorder />} checkedIcon={<Star />} />}
              label="Accept Our Rule"
            />
            <Button type="submit">SignUp</Button>
            <Link to={Path.login}>Already have an account? Login!</Link>
          </Box>
        </ValidatorForm>
      </Box>
    </div>
  );
};

export default SignUp;
