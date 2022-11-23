import { Create, SimpleForm, TextInput } from "react-admin";

export const validateForm = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "ra.validation.required";
  }
  return errors;
};

const categoryCreate = (props) => (
  <Create {...props}>
    <SimpleForm sx={{ maxWidth: 500 }} validate={validateForm}>
      <TextInput source="name" isRequired fullWidth />
    </SimpleForm>
  </Create>
);

export default categoryCreate;
