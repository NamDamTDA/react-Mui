import { Box, Button, Card, Typography } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-admin";
import { auth, db, logout } from "../../../firebase/firebaseConfig";

const UserDetail = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    fetchUserName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Card>
        <Box className="">
          Logged in as
          <Typography>{name}</Typography>
          <Typography>{user?.email}</Typography>
          <Button className="" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default UserDetail;
