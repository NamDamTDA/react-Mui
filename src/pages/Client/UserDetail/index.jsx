import { Box, Button, Card, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { logout } from "../../../features/AuthSlice/userSlice";

import styles from "./styles.module.css";

const UserDetail = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <Card className={styles.user_area}>
        <Box className={styles.user_main}>
          <Typography component="p">Logged in as</Typography>
          <Typography component="h1">{user.email}</Typography>
          <Button className="" onClick={handleLogout}>
            Logout
          </Button>{" "}
          <br />
          <Link to="/admin">Go to Admin</Link>
        </Box>
      </Card>
    </>
  );
};

export default UserDetail;
