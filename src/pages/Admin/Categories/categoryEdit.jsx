import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";
import { validateForm } from "./categoryCreate";

const categoryEdit = () => (
  <Edit title="Edit Category">
    <SimpleForm sx={{ maxWidth: 500 }} validate={validateForm}>
      <TextInput source="name" isRequired fullWidth/>
    </SimpleForm>
  </Edit>
);

export default categoryEdit;
