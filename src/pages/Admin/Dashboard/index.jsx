import { Card, CardContent, CardHeader } from "@mui/material";
import React from "react";

const AdminPanel = () => {
  return (
    <div>
      <Card>
        <CardHeader title="Welcome to Admin Panel" />
        <CardContent>This is the board to control all the products and categories.</CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
