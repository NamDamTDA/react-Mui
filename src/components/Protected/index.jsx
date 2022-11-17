import React from "react";
import { useSelector } from "react-redux";
import LoginAdminPage from "../../pages/Admin/Login";

const Protected = ({ children }) => {
  const { user } = useSelector(({ auth }) => auth);

  if (user?.emailVerified) {
    return children;
  }

  return <LoginAdminPage />;
};

export default Protected;
