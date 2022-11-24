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
import { Link, useNavigate } from "react-router-dom";
import Path from "../../../routes/contants";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/AuthSlice/userSlice";

const SignUp = () => {
  const signUp = useRef("form");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUsers] = useState({
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    checkBox: false,
    showPassword: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUsers({
      ...users,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setUsers({
      ...users,
      showPassword: !users.showPassword,
    });
  };

  const handleClickCheckBox = () => {
    setUsers({
      ...users,
      checkBox: !users.checkBox,
    });
  };
  const handleRegister = async () => {
    dispatch(register(users));
    
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!ValidatorForm.hasValidationRule("isPasswordMatch")) {
      ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
        if (value !== users.password) {
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
  }, [users.passwordRepeat, users.password]);

  return (
    <div>
      <Box className={styles.signup_area}>
        <ValidatorForm className={styles.signup_main} ref={signUp} onSubmit={handleRegister}>
          {" "}
          <Typography component="h3">SignUp</Typography>
          <Box className={styles.account_form}>
            <TextValidator
              autoFocus
              id="name"
              name="username"
              autoComplete="username"
              color="secondary"
              label="Full Name"
              variant="outlined"
              onChange={handleChange}
              value={users.username}
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
              value={users.email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
            />
            <TextValidator
              id="password"
              color="secondary"
              label="Password"
              autoComplete="new-password"
              type={users.showPassword ? "text" : "password"}
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
                      {users.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="password"
              value={users.password}
              validators={["required", "minStringLength:6"]}
              errorMessages={["This field is required", "Min pass is not below 6"]}
            />
            <TextValidator
              id="passwordRepeat"
              color="secondary"
              label="Confirm Password"
              type={users.showPassword ? "text" : "password"}
              variant="outlined"
              onChange={handleChange}
              name="passwordRepeat"
              value={users.passwordRepeat}
              validators={["isPasswordMatch", "required"]}
              errorMessages={["Password mismatch", "This field is required"]}
            />
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  icon={<StarBorder />}
                  checkedIcon={<Star />}
                  checked={users.checkBox ? true : false}
                  onChange={handleClickCheckBox}
                />
              }
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
