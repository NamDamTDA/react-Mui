import { Edit, SimpleForm, TextInput } from "react-admin";

const userEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="company" />
    </SimpleForm>
  </Edit>
);

export default userEdit;
