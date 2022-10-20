import React from "react";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <main>
        <Outlet></Outlet>
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default AdminLayout;
