import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { login } from "../../../features/AuthSlice/userSlice";
import toastr from "toastr";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { Favorite, FavoriteBorder, Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Button } from "react-admin";
import Path from "../../../routes/contants";
import styles from "./styles.module.css";

const LoginAdminPage = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...users,
      [name]: value,
    });
  };

  const handleClickShowPassword = () => {
    setUser({
      ...users,
      showPassword: !users.showPassword,
    });
  };

  const handleClickCheckBox = () => {
    setUser({
      ...users,
      checkBox: !users.checkBox,
    });
  };

  const handleLogin = () => {
    dispatch(login(users));
  };

  useEffect(() => {
    if (user) {
      if (user?.emailVerified) {
        navigate("/admin");
      } else {
        toastr.error("You can have do not access");
      }
    }
  }, [user, navigate]);
  return (
    <div>
      <Box className={styles.login_area}>
        <ValidatorForm className={styles.login_main} onSubmit={handleLogin}>
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
              value={users.email}
              validators={["required", "isEmail"]}
              errorMessages={["This field is required", "Email is not valid"]}
            />
            <TextValidator
              id="password"
              autoComplete="new-password"
              color="secondary"
              label="Password"
              type={users.showPassword ? "text" : "password"}
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
                      {users.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              value={users.password}
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
                  checked={users.checkBox ? true : false}
                  onChange={handleClickCheckBox}
                />
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

export default LoginAdminPage;
