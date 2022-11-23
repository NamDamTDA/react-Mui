import { Home } from "@mui/icons-material";
import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Welcome to Admin Panel" />
        <CardContent>This is the board to control all the products and categories.</CardContent>
        <CardContent>
          <Link to="/">
            <Home />
            Click here to HomePage?
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
