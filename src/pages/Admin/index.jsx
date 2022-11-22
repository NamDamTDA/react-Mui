import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import AdminPanel from "./Dashboard";
import Products from "./Products";
import Users from "./Users";
import Categories from "./Categories";

const StoreAdmin = () => {
  return (
    <>
      <Admin
        basename="/admin"
        dashboard={AdminPanel}
        dataProvider={simpleRestProvider("https://eggplant-sticky-avenue.glitch.me")}
      >
        <Resource name="products" {...Products} />
        <Resource name="users" {...Users} />
        <Resource name="categories" {...Categories} />
      </Admin>
    </>
  );
};

export default StoreAdmin;
