import React from "react";
import { Star, StarBorder } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import styles from "./styles.module.css";

const SignUp = () => {
  return (
    <div>
      <Box className={styles.signup_area}>
        <Box className={styles.signup_main}>
          <Typography component="h3">SignUp</Typography>
          <Box component="form" noValidate autoComplete="off" className={styles.account_form}>
            <TextField id="name" color="secondary" label="Full Name" variant="outlined" />
            <TextField id="email" color="secondary" label="Email" variant="outlined" />
            <TextField id="password2" color="secondary" label="Password" variant="outlined" />
            <TextField
              id="password"
              color="secondary"
              label="Confirm Password"
              variant="outlined"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" icon={<StarBorder />} checkedIcon={<Star />} />}
              label="Accept Our Rule"
            />
            <Button>SignUp</Button>
            <Typography component="a" href="#" target="_blank">
              Already have an account? Login!
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SignUp;
