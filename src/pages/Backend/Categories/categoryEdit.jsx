import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const categoryEdit = () => (
  <Edit title="Edit Category">
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default categoryEdit;
