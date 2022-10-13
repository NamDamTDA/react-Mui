import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div>
      <Box className={styles.login_area}>
        <Box className={styles.login_main}>
          <Typography component="h3">Login</Typography>
          <Box component="form" noValidate autoComplete="off" className={styles.account_form}>
            <TextField id="user" color="secondary" label="User Name" variant="outlined" />
            <TextField id="password" color="secondary" label="Password" variant="outlined" />
            <Typography component="a" href="#" target="_blank">
              Lost your password?
            </Typography>
            <FormControlLabel
              control={
                <Checkbox color="secondary" icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              }
              label="Remember me"
            />
            <Button>Login</Button>
            <Typography component="a" href="#" target="_blank">
              Don't have an account? SignUp!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Login;
